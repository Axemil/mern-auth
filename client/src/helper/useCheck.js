const useCheck = () => {
    async function postData(url = "", token) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    return postData;
}

export default useCheck;