import http from "../common/http"
import store from "../store";
class contactService {
    constructor() {
        http.interceptors.request.use(config => {
            const user = store.getters.loggedInUser;
            if (user && user.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        });
    }
    getAll() { return http.get("/contacts"); }
    get(id) { return http.get(`/contacts/${id}`); }
    //...
}
export default new ContactService();