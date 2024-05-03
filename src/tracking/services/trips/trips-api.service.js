import http from "@/shared/services/http-common.js";

/**
 * TripsApiService class
 * @description Service class for making HTTP requests to the API
 */
export class TripsApiService {

        /**
        * Get all trips
        * @returns
        */

        getAll() {
            return http.get("/trips");
        }
        getById(id) {
            return http.get(`/trips/${id}`);
        }
        findByTitle(title) {
            return http.get(`/trips?title=${title}`);
        }
}