

import { Router,Request,Response, NextFunction } from "express";
import { error } from "node:console";
import { Issue} from "../data/issue";
import {createIssueSchema , updateIssueSchema, setStatusSchema, classifyIssueSchema , assignIssueSchema, addCommentSchema} from "../schema/issueSchemas.js";
import { listIssues , getIssueByID , createIssue, updateIssue, deleteIssue , setStatus , setClassify , assignIssue, addComment, deleteComment  } from "../controllers/issueController.js";
import { validateBody } from "../middleware/validate";
import { attachCurrentUser } from "../middleware/currentUser";




export const hospitalRouter = Router(); //creates a router object that can be called from other files

hospitalRouter.get("/", listIssues); 

hospitalRouter.get("/:id",getIssueByID);
  
hospitalRouter.post("/",attachCurrentUser,validateBody(createIssueSchema),createIssue);  //creates a new issue with a status of open and priority of medium if not set
hospitalRouter.post("/:id/comments",attachCurrentUser,validateBody(addCommentSchema),addComment);

hospitalRouter.patch("/:id",validateBody(updateIssueSchema),updateIssue);
hospitalRouter.patch("/:id/status",validateBody(setStatusSchema),setStatus);
hospitalRouter.patch("/:id/classify",validateBody(classifyIssueSchema),setClassify);
hospitalRouter.patch("/:id/assign",validateBody(assignIssueSchema),assignIssue);

hospitalRouter.delete("/:id",deleteIssue)
hospitalRouter.delete("/:id/comments/:commentId", deleteComment);

 
  export default hospitalRouter;
