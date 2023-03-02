


export const addChargingPortValidation = (data) => {

    const { kW, rate, type, location, city, postalCode, country } = data;

    if (rate < 0 || rate == null) {
        return "rate must be greater than zero"
    } else if (kW < 0 || kW == null) {
        return "kW must be greater than zero"
    } else if (type == null) {
        return "must be enter type filed "
    } else if (location == null) {
        return "must be enter location filed"
    } else if (city == null) {
        return "must be enter city filed"
    } else if (country == null) {
        return "must be enter country filed"
    } else if (postalCode == null || postalCode === Number) {
        return "must be enter postalCode filed"
    }
    else {
        return "success"
    }
}