import appConfig from "./config/appConfig.js";
import router from "./router/index.js";

const app = express();
const PORT = appConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
