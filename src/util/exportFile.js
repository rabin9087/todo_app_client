import randomEmail from "random-email";

export const randomEmailAddress = () => {
    return localStorage.setItem(
        "randomEmail",
        randomEmail({ domain: "shahkiranaPasal.com" })
    );
};
export const localStoragEmail = localStorage.getItem("randomEmail");