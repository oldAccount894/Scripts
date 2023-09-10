local module = {}

function module:a(headers)
  const authResponse = await fetch('https://auth.roblox.com/v1/logout', {
    method: 'POST',
    headers: headers,
  });
end


return module
