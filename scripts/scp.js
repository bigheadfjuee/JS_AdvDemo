const exec = require('child_process').exec
const execSync = require('child_process').execSync

const deployHost = '192.168.2.24' 
const deployUser = 'pi'
const deployLocation = `${deployUser}@${deployHost}:/home/pi/app`
const rsa_key = 'C:\\Users\\bighe\\.ssh'// '~\.ssh\id_rsa'

exec(`scp -i ${rsa_key} -r package.json ${deployLocation}`, (err, stdout, stderr) => {
  if (err) console.log(err)
  console.log('\x1b[32m%s\x1b[0m', `Copied package.json to ${deployHost} successfully`)

  exec(`scp -i ${rsa_key} -r *.js ${deployLocation}`, (err, stdout, stderr) => {
    if (err) console.log(err)
    console.log('\x1b[32m%s\x1b[0m', `Copied *.js to ${deployHost} successfully`)

  })
  
})
