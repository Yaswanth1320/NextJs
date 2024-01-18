"use server"
import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import { formSchema, formSchemaType } from "@/schema/form";

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

export async function CreateForm(data:formSchemaType){
    const validation = formSchema.safeParse(data);
    if(!validation.success){
        throw new Error("Form not valid");
    }
    
    const user = await currentUser();
    if(!user){
        throw new UserNotFoundErr();
    }

    const { name,description } = data

    const form = await prisma.form.create({
        data:{
            userId: user.id,
            name,
            description
        }
    })

    return form.id;
}


export async function getForms(){
    const user = await currentUser();
    if(!user){
        throw new UserNotFoundErr();
    }

    return await prisma.form.findMany({
        where:{
            userId: user.id,
        },
        orderBy:{
            createdAt: "desc"
        }
    })
}


export async function getFormById( id: number ){
    const user = await currentUser();
    if(!user){
        throw new UserNotFoundErr();
    }

    return await prisma.form.findUnique({
        where:{
            userId: user.id,
            id
        }
    })
}