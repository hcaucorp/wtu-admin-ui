export enum AudioFile {
    InvalidAddress = 'invalid-address.mp3',
    ServerOffline = 'server-offline.mp3',
    TopUpFailed = 'top-up-failed.mp3',
    TopUpSuccessful = 'top-up-successful.mp3',
    Unauthorized = 'unauthorized.mp3',
    Unfulfilled = 'unfulfilled.mp3',
}

export function playAudio(audioFile: AudioFile) {
    const audio = new Audio();
    audio.src = '../../../assets/audio/' + audioFile;
    audio.load();
    audio.play();
}
