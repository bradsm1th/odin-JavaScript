/* ============================
/* two ways of creating objects
/* ===========================*/

// constructor
const User = function (name) {
    name;
    this.discordName = "@" + name;
}

// Factory function (no prototype)
function createUser(name) {
    const discordName = "@" + name;

    let rep = 0;
    const getRep = function() {
        return rep;
    }
    const giveRep = function() {
        return rep++;
    };

    return { name, discordName, getRep, giveRep };
}

const josh = createUser("Josh");
console.log(josh, "<- just josh");

josh.giveRep();
josh.giveRep();

console.log({
    discordName: josh.discordName,
    rep: josh.getRep()
    // rep: josh.giveRep()
});

// josh.getRep;
// console.log(josh.rep, "<- josh after get rep");
// josh.giveRep;
// console.log(josh.rep, "<- josh after 1 give rep");
// josh.giveRep;
// console.log(josh.rep, "<- josh after another give rep");