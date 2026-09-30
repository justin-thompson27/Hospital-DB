import { ObjectId } from "mongodb"
interface Patients{
  _id: ObjectId,
  fullName: string,
  address: string,
  insurance: string,
  dateOfBirth: Date,
  username: string,
  password: string,
  email: string,
  telephone: number,
}

interface Departments
{
  _id: ObjectId,
  departmentName: string,
}

interface Doctors
{
  _id: ObjectId,
  fullName: string,
  departmentID: ObjectId
}

interface Appointments
{
  _id: ObjectId,
  patientID : ObjectId,
  doctorID: ObjectId,
  departmentID: ObjectId,
  appointmentTime: string,
  appointmentDate: Date

}

interface medicalRecords
{
  _id: ObjectId,
  patientID: ObjectId,
  appointmentID: ObjectId,
  medicines: string,
  prescribedDate: Date,
  allergies: string,
   


}