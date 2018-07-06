const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'o!oof') {
    msg.reply('**oof**');
  }
});

client.on('message', msg => {
  if (msg.content === 'o!oofx2') {
    msg.reply('`*Plugs in microphone*` ** O O F**');
  }
});

client.on('message', msg => {
  if (msg.content === 'o!boof') {
    msg.reply('**What are you? Fucking gay?**');
  }
});

client.on('message', msg => {
  if (msg.content === 'o!suicide') {
    msg.reply('**Oh man thats fucked up**');
  }
});

client.on('message', msg => {
  if (msg.content === 'oof bot sucks') {
    msg.reply(':thinking:');
  }
});

client.on('message', msg => {
  if (msg.content === 'o!commands') {
    msg.reply('**These are the current commands for oof bot, "o!emoji" (only works on certain servers), "o!00f", "o!oof", "o!oofx2", "o!boof", "o!suicide", "o!info". Theres also hidden commands, but can you find them?**');
  }
});

client.on('message', msg => {
  if (msg.content === '**Tell me a secret oof bot**') {
    msg.reply('**shhh! Dont tell anyone but Night is the best because he let me use his server as beta testing! :heart: Thanks Night :heart:**');
  }
});

client.on('message', msg => {
  if (msg.content === '01101111 01101111 01100110') {
    msg.reply('**wow youre such a hackerman oof!');
  }
});

client.on('message', msg => {
  if (msg.content === 'o!info') {
    msg.reply('**Well Im the oof bot (useless) and I was made by a interesting guy called Crackerr, all I really do is say "oof" and go offline all the time, so yeah thats me... Hannah Bake... Sorry I had to**');
  }
});

client.on('message', msg => {
  if (msg.content === 'o!00f') {
    msg.reply('**Nigga you now have the big o o f**');
  }
});

client.on('message', msg => {
  if (msg.content === 'foo') {
    msg.reply('**What the fuck man! I thought we were friends! But no, you have to say "foo"**');
  }
});

client.on('message', msg => {
  if (msg.content === '√') {
    msg.reply('```access granted```');
  }
});

client.login('NDY0NTAzMjY2NzE0MzIwOTA4.DiB4uA.cAtJA4R3XTODT7lvO0pRFDeeA6I');
