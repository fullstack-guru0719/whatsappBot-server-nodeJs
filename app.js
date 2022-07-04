const Text = require("./text.js");
const WA = require("./wa.js");

WA.app.get('/instance', WA.cors, async (req, res) => {

    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WA.check_token(access_token, instance_id, false, res, async function(status){
        await WA.instance(instance_id, false, false, res, async (client) => {
            return await WA.get_info(client, res);
        });
    });

});

WA.app.get('/check_instance', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    await WA.check_token_go(access_token, instance_id, res, async (status) => {
        await WA.check_instance(instance_id, false, res, async (client) => {});
    });
});


WA.app.get('/logout', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    await WA.check_token(access_token, instance_id, false, res, async function(status){
        await WA.instance(instance_id, false, false, res, function(client){
            WA.logout(instance_id, res);
        });
    });
});

WA.app.get('/get_qrcode', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WA.check_token_go(access_token, instance_id, res, async (status) => {
        await WA.instance(instance_id, true, false, res, async (client) => {
            WA.get_qrcode(instance_id, res, async (result) => {});
        });
    });
});

WA.app.get('/get_chats', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WA.check_token(access_token, instance_id, false, res, async (status) => {
        await WA.instance(instance_id, false, false, res, async (client) => {
            WA.get_chats(client, res);
        });
    });
});

WA.app.get('/get_groups', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WA.check_token(access_token, instance_id, false, res, async (status) => {
        await WA.instance(instance_id, false, false, res, async (client) => {
            WA.get_groups(client, instance_id, res);
        });
    });
});

WA.app.get('/get_messages', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    var chat_id = req.query.chat_id;
    var cursor = req.query.cursor;
    var fromMe = req.query.fromMe;

    if(cursor != undefined && fromMe != undefined){
        cursor = {
            "id": cursor,
            "fromMe": parseInt(fromMe)?true:false
        }
    }

    await WA.check_token(access_token, instance_id, false, res, async function(status){
        await WA.instance(instance_id, false, false, res, function(client){
            WA.get_messages(client, chat_id, cursor, res);
        });
    });
});

WA.app.get('/unpin_chat', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    var chat_id = req.query.chat_id;

    await WA.check_token(access_token, instance_id, false, res, async (status) => {
        await WA.instance(instance_id, false, true, res, async (client) => {
            WA.unpin_chat(client, chat_id, res);
        });
    });
});

WA.app.get('/pin_chat', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    var chat_id = req.query.chat_id;

    await WA.check_token(access_token, instance_id, false, res, async (status) => {
        await WA.instance(instance_id, false, true, res, async (client) => {
            WA.pin_chat(client, chat_id, res);
        });
    });
});

WA.app.get('/delete_chat', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    var chat_id = req.query.chat_id;

    await WA.check_token(access_token, instance_id, false, res, async (status) => {
        await WA.instance(instance_id, false, false, res, async (client) => {
            WA.delete_chat(client, chat_id, res);
        });
    });
});

WA.app.get('/clear_chat', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    var chat_id = req.query.chat_id;

    await WA.check_token(access_token, instance_id, false, res, async (status) => {
        await WA.instance(instance_id, false, false, res, async (client) => {
            WA.clear_chat(client, chat_id, res);
        });
    });
});

WA.app.get('/delete_message', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    var chat_id = req.query.chat_id;
    var message_id = req.query.message_id;

    await WA.check_token(access_token, instance_id, false, res, async function(status){
        await WA.instance(instance_id, false, false,  res, function(client){
            WA.delete_message(client, chat_id, message_id, res);
        });
    });
});

WA.app.get('/get_file', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    var chat_id = req.query.chat_id;
    var message_id = req.query.message_id;

    await WA.check_token(access_token, instance_id, false, res, async function(status){
        await WA.instance(instance_id, false, false,  res, function(client){
            WA.get_file(client, chat_id, message_id, res);
        });
    });
});

WA.app.get('/get_contacts', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;
    await WA.check_token(access_token, instance_id, false, res, async function(status){
        await WA.instance(instance_id, false, false, res, function(client){
            WA.get_contacts(client, instance_id, res);
        });
    });
});

WA.app.get('/get_contact', WA.cors, async (req, res) => {
    var contact_id = req.query.contact_id;
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WA.check_token(access_token, instance_id, false, res, async function(status){
        await WA.instance(instance_id, false, false, res, function(client){
            WA.get_contact(client, contact_id, res);
        });
    });
});

WA.app.get('/get_group_participants', WA.cors, async (req, res) => {
    var group_id = req.query.group_id;
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WA.check_token(access_token, instance_id, false, res, async function(status){
        await WA.instance(instance_id, false, false, res, function(client){
            WA.get_group_participants(client, group_id, res);
        });
    });
});

WA.app.post('/send_message', WA.cors, async (req, res) => {
    var access_token = req.query.access_token;
    var instance_id = req.query.instance_id;

    await WA.check_token(access_token, instance_id, true, res, async function(status){
        await WA.instance(instance_id, false, false, res, function(client){
            WA.send_message(client, access_token, req, res);
        });
    });
});

WA.app.get('/check', function (req, res) {
  res.send('1');
});

WA.server.listen(8000, () => {
    console.log(Text.whatsapp_live);
});
