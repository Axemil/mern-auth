const useCheck = () => {
    async function fetching(url = "", body) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    return fetching;
}

export default useCheck;