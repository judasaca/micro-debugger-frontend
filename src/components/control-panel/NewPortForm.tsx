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
  port: z.number({ message: "Port is required" }),
});

type SchemaType = z.infer<typeof schema>;
const NewPortForm = () => {
  const addPort = useGlobalStore((state) => state.addPort);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: SchemaType) => {
    addPort(data.port);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 items-stretch">
        <Input
          label="Add a new port"
          type="number"
          id="port-input"
          error={errors.port}
          {...register("port", { valueAsNumber: true })}
        />
        <Button type="submit">
          <PlusIcon />
        </Button>
      </div>
    </form>
  );
};

export default NewPortForm;
