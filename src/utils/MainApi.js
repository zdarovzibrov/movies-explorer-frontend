class MainApi {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    async _response(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Произошла ошибка: ${response.status}`);
    }

    async _request(url, options) {
        return fetch(url, options).then(this._response);
    }

    register(body) {
        return this._request(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    }

    login(body) {
        return this._request(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                email: body.email,
                password: body.password
                }
            ),
        });
    }

    checkToken(token) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            },
        });
    }

    getProfile() {
        return this._request(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: this._headers,
        });
    }

    getInitialCards() {
        return this._request(`${this._baseUrl}/movies/`, {
            method: "GET",
            headers: this._headers,
        });
    }


    addNewCard(obj) {
        return this._request(`${this._baseUrl}/movies/`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                country: obj.country,
                director: obj.director,
                duration: obj.duration,
                year: obj.year,
                description: obj.description,
                image: 'https://api.nomoreparties.co' + obj.image.url,
                trailerLink: obj.trailerLink,
                thumbnail: 'https://api.nomoreparties.co' + obj.image.formats.thumbnail.url,
                movieId: obj.id,
                nameRU: obj.nameRU,
                nameEN: obj.nameEN,
            }),
        });
    }

    deleteCard(id) {
        return this._request(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            headers: this._headers,
        });
    }

    setProfile(obj) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: obj.name,
                email: obj.email,
            }),
        });
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: "PUT",
                headers: this._headers,
            });
        } else {
            return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: "DELETE",
                headers: this._headers,
            });
        }
    }

    setAvatar(obj) {
        return this._request(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: obj.avatar,
            }),
        });
    }
}

export const mainApi = new MainApi({
    baseUrl: "https://api.zibrovmovies.diplom.nomoredomains.rocks",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
    },
});
