import { stackMiddlewares, withAuthorization } from "~/middlewares";

export default stackMiddlewares([withAuthorization]);
