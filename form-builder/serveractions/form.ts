"use server"

import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";

class UserNotFoundErr extends Error {}

export async function getFormStats(){
    const user = await currentUser();
    if(!user){
        throw new UserNotFoundErr();
    }

    const stats = await prisma.form.aggregate({
        where:{
            userId: user.id,
        },
        _sum:{
            visit: true,
            submission: true,
        }
    })

    const visits = stats._sum.visit || 0 ;
    const submission = stats._sum.submission || 0 ;

    let submissionRate = 0;
    if(visits){
        submissionRate = (submission / visits) * 100 ;
    }
    const bounceRate = 100 - submissionRate ;

    return {
        visits,submission,submissionRate,bounceRate
    }
}