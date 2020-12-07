class User {
    constructor(
        email,
        password,
        nickname,
        first_name,
        last_name,
        phone,
        gender_orientation,
        city,
        country,
        date_of_birth_day,
        date_of_birth_month,
        date_of_birth_year
    ) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.gender_orientation = gender_orientation;
        this.city = city;
        this.country = country;
        this.date_of_birth_day = date_of_birth_day;
        this.date_of_birth_month = date_of_birth_month;
        this.date_of_birth_year = date_of_birth_year;
    }
}
export default User;