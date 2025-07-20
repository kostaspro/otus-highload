#!lua name=dialogs
local function get_dialogs(keys,args)
    return redis.call('zrange',keys[1],unpack(args))
end
local function set_dialogs(keys,args)
    redis.call('zadd',keys[1],unpack(args))
end
local function rem_dialogs(keys,args)
    redis.call('zrem',keys[1],unpack(args))
end
redis.register_function('get_dialogs', get_dialogs)
redis.register_function('set_dialogs', set_dialogs)
redis.register_function('rem_dialogs', rem_dialogs)