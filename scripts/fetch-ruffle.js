const extract = require('extract-zip')

async function main () {
  try {
	// fetch the zip file


    await extract(source, { dir: target })
    console.log('Extraction complete')
  } catch (err) {
    // handle any errors
  }
}
