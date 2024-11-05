import { Router } from "express";
import { getUserCompanies } from "../controllers/companyController";


const companyRoutes = Router();

companyRoutes.get('/', getUserCompanies);

export default companyRoutes;
