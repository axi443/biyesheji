import JSEncrypt from 'jsencrypt'

export function getJse(value) {
  const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALJUfD78hbI1UPA9boZ+eMKa/PMnWUM1FjRN1Fo59GOurzPBYCf+gnHQulyMZPuHS0leEqlzZ+lVQkJTvHZ7TUMCAwEAAQ=='
  const jse = new JSEncrypt()
  jse.setPublicKey(publicKey)
  const result = jse.encrypt(value)

  return result
}