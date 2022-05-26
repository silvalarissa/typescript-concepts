interface Game {
    title: string;
    description: string;
    platform: string[]
    getSimilars: (title: string) => string
}

const rdr2: Game = {
    title: 'Red dead redemption 2',
    description: 'the best game in the world',
    platform: ['PS4', 'PC', 'XBOS'],
    getSimilars: (title: string) => {
        return 'Red dead redemption, GTA V, GTA San Andreas, GTA Vice city'
    }
}

interface DLC extends Game {
    numberOfHours: number
    dlcDescription: string
}

const myDlc: DLC = {
    title: 'Red dead redemption',
    description: 'the best game in the world',
    platform: ['PS4', 'PC', 'XBOS'],
    getSimilars: (title: string) => {
        return 'Red dead redemption, GTA V, GTA San Andreas, GTA Vice city'
    },
    numberOfHours: 25,
    dlcDescription: 'Nightmare'
}
