/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    command = command.replace(/\(\)/gm,'o')
    command = command.replace(/\(al\)/gm,'al')
    return command
};

interpret('G()(al)')