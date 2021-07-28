import axios from 'axios';

export const getQuote = async () => {
    try {
        const quote = await axios.get("https://api.quotable.io/random");
        return quote.data;
    } catch (error) {
        console.log("Error in retrieving quote" + error.message);
    }
}