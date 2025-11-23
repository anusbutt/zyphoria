"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  zipCode: z.string().min(3, { message: "Zip Code must be at least 3 characters." }),
  country: z.string().min(2, { message: "Country must be at least 2 characters." }),
});

export type CheckoutFormValues = z.infer<typeof formSchema>;

interface CheckoutFormDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccessfulSubmission: (data: CheckoutFormValues) => void;
}

export function CheckoutFormDialog({
  isOpen,
  onOpenChange,
  onSuccessfulSubmission,
}: CheckoutFormDialogProps) {
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    onSuccessfulSubmission(data);
    onOpenChange(false); // Close the dialog on successful submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Shipping Information</DialogTitle>
          <DialogDescription>
            Please provide your shipping details to complete the order.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              {...form.register("name")}
              className="col-span-3"
            />
            {form.formState.errors.name && (
              <p className="col-span-4 text-right text-sm text-destructive">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="col-span-3"
            />
            {form.formState.errors.email && (
              <p className="col-span-4 text-right text-sm text-destructive">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              {...form.register("address")}
              className="col-span-3"
            />
            {form.formState.errors.address && (
              <p className="col-span-4 text-right text-sm text-destructive">
                {form.formState.errors.address.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input
              id="city"
              {...form.register("city")}
              className="col-span-3"
            />
            {form.formState.errors.city && (
              <p className="col-span-4 text-right text-sm text-destructive">
                {form.formState.errors.city.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="zipCode" className="text-right">
              Zip Code
            </Label>
            <Input
              id="zipCode"
              {...form.register("zipCode")}
              className="col-span-3"
            />
            {form.formState.errors.zipCode && (
              <p className="col-span-4 text-right text-sm text-destructive">
                {form.formState.errors.zipCode.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="country" className="text-right">
              Country
            </Label>
            <Input
              id="country"
              {...form.register("country")}
              className="col-span-3"
            />
            {form.formState.errors.country && (
              <p className="col-span-4 text-right text-sm text-destructive">
                {form.formState.errors.country.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">Submit Order</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
