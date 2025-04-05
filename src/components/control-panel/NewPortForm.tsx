import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "../ui/input";
import { TypographyP } from "../typography/P";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import useGlobalStore from "@/lib/store";

const schema = z.object({
  port: z.number({ coerce: true }),
});

type SchemaType = z.infer<typeof schema>;
const NewPortForm = () => {
  const addPort = useGlobalStore((state) => state.addPort);
  const { handleSubmit, register } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: SchemaType) => {
    console.log("hey");
    addPort(data.port);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 items-stretch">
        <TypographyP>Add a new port</TypographyP>

        <Input {...register("port")} />
        <Button type="submit">
          <PlusIcon />
        </Button>
      </div>
    </form>
  );
};

export default NewPortForm;
