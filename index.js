const axios = require("axios");

const timer = ms => new Promise(res => setTimeout(res, ms));

const token = "NjA4MjI1MTY2OTY2Nzg0MDAx.Yk1W3A.G1hTHEZYHVaN_CrWsv3YoYSURIE";
const channelID = "965534251615416380";
const message = "i done my spam tool";
const delayTime = 5000;

const main = async () => {
    while (true) {

        const data = {
            content: message,
            nonce: "",
            tts: "false"
        }

        try {
            const response = await axios.post(
                `https://discordapp.com/api/v6/channels/${channelID}/messages`,
                data, {
                headers: {
                    Authorization: token
                }
            });
        } catch (error) {
            console.error("Error when send message");
        }

        await timer(delayTime);
    }
}

main();