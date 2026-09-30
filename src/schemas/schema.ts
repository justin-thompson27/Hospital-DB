import { title } from "node:process";
import {date, z} from "zod";

export const createPatientSchema = z.strictObject({

   fullName: z.string().min(1,"Full name is required."),
   address: z.string().min(1,"Address is required."),
  dateOfBirth: z.date().min(new Date("1900-01-01"),"Date of birth cannot be before January 1st of 1900").max(new Date(), "Date of birth cannot be in the future."),
  username: z.string().min(8,"Username is required and be must at least 8 characters long.")

   

})