import express, { Express, Request, Response, Application } from 'express';
import dbConnect from './db/dbconnect';
import "dotenv/config";
import UserRoute from "./routes/userRoute"
import SellerRoute from "./routes/sellerRoute"


const app: Application = express();
const port = process.env.PORT;


app.use(express.json())
app.use(UserRoute)
app.use(SellerRoute)


app.get('/', (req: Request, res: Response) => {
  res.send('Ecommerce API backend');
});

dbConnect().then(() => {
  app.listen(port, () => {
    console.log(`server is listening on ${port}`);
  })
})




