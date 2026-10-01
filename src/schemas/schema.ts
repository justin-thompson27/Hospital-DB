import { title } from "node:process";
import {date, email, z} from "zod";
import validator from "validator"; //found on github
export const createPatientSchema = z.strictObject({

   fullName: z.string().min(1,"Full name is required."),
   address: z.string().min(1,"Address is required."),
  dateOfBirth: z.date().min(new Date("1900-01-01"),"Date of birth cannot be before January 1st of 1900").max(new Date(), "Date of birth cannot be in the future."),
  username: z.string().min(8,"Username is required and be must at least 8 characters long."),
  password: z.string().min(8,"Password must be 8 characters long.").max(20,"Password can't be longer than 20 characters."),
  email: z.email({error: "Must be a valid email address"}),
  telephone: z.string().refine(validator.isMobilePhone),
  insurance: z.string()


   

});


export const createDepartmentSchema = z.object({
  departmentName: z.string().min(1,"Department Name is required.")
})

export const createDoctorsSchema = z.object({
  fullName: z.string().min(1, "Full name is required")
})
function Test()
{
  try {
  createPatientSchema.parse({
  fullName: 'Benny Walsham',
  address: '661 Saint Paul Park',
  username: 'bwalshamh',
  password: 'zD0=An5J<',
  dateOfBirth: new Date('1914-05-13'),
  insurance: 'Unknown',
  email: 'bwalshamh@google.com.au',
  telephone: "42-715-8973"
  })
  return "Pass";
  } catch (error) {
    return "Fail" +`\n${error}`;
  }
 
}

console.log(Test());