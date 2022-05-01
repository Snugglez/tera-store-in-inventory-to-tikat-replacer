module.exports = function reee(d) {
  let enabled = false
  d.hook('C_SHOW_ITEMLIST', '*', (e) => { if (e.requested) enabled = true })
  d.hook('C_PLAYER_LOCATION', '*', (e) => { if (enabled) enabled = false })
  d.hook('C_SHOW_AWESOMIUMWEB_SHOP', 'event', () => {
    if (!enabled) return
    d.send('C_REQUEST_CONTRACT', '*', { type: 63 })
    return false
  })
}
