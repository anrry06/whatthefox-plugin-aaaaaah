const Plugin = {
    name: "aaaaaah",
    event: "voiceStateUpdate",
    action: function (router, oldState, newState) {
        if (newState.member.user.bot) {
            // console.log("bot");
            return;
        }
        
        const voiceChannel = newState.member.voice.channel;
        if (voiceChannel === null) {
            // console.log("no voiceChannel");
            return;
        }

        // if(router.dispatcher !== null && router.dispatcher.pause){
        //     router.dispatcher.pause();
        // }

        console.log('aaaaaah - ' + newState.member.user.username);

        voiceChannel.join().then((connection) => {
            router.IsPlaying = true;
            const dispatcher = connection.play("./sounds/aaaaaah.mp3");
            dispatcher.setVolumeLogarithmic(1);

            dispatcher.on("finish", () => {
                router.IsPlaying = false;
                // if(router.dispatcher !== null && router.dispatcher.pause){
                //     router.dispatcher.resume();
                // }
            });
        });
    },
};

module.exports = Plugin;
