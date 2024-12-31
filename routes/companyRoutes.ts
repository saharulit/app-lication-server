import { Router } from "express";
import { searchCompanies } from "../controllers/companyController";


const companyRoutes = Router();

companyRoutes.get('/', searchCompanies);

export default companyRoutes;
