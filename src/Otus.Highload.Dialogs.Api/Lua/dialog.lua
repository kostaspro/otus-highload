#!lua name=dialogs
local function get_dialogs(keys,args)
    return redis.call('zscan','dialogs',0,'match',args[1])[2]
end
local function set_dialogs(keys,args)
    redis.call('zadd','dialogs',args[1],args[2])
end
redis.register_function('get_dialogs', get_dialogs)
redis.register_function('set_dialogs', set_dialogs)