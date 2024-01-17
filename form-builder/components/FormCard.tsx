import { Form } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { formatDistance } from "date-fns";
import { MdPreview } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";


export const FormCard = ({ form }: { form: Form }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="truncate">{form.name}</span>
          {form.published && <Badge>published</Badge>}
          {!form.published && <Badge variant={"destructive"}>Darft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {!form.published && (
            <span className="flex items-center gap-2">
              <MdPreview className="text-muted-foreground" />
              <span>{form.visit.toLocaleString()}</span>
              <FaWpforms className="text-muted-foreground" />
              <span>{form.submission.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm truncate h-[20px] text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {!form.published && (
          <Button asChild className="mt-2 w-full text-md gap-4">
            <Link
              className="flex items-center gap-2"
              href={`/forms/${form.id}`}
            >
              Edit form <MdEditSquare />
            </Link>
          </Button>
        )}
        {form.published && (
          <Button asChild className="mt-2 w-full text-md gap-4">
            <Link
              className="flex items-center gap-2"
              href={`/forms/${form.id}`}
            >
              View submissions <FaArrowAltCircleRight />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
