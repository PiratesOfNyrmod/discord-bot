const guestRole = "867714362352336927";

module.exports.description = "A command to join the Guest group";

module.exports.handleInteraction = (interaction) => {
    let member = interaction.member;

    if(!member.roles.cache.has(guestRole)) {
        member.roles.add(guestRole);
        interaction.reply("I've added you to the guests. Welcome!");
    } else {
        interaction.reply("You are already a Guest.");
    }
}