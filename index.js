const puppeteer = require('puppeteer');



(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const url = 'https://www.sitemercado.com.br/supermercadoiob/joao-pessoa-manaira-manaira-rua-major-ciraulo/produtos/limpeza/casa-em-geral';
  const page = await browser.newPage();

  await page.goto(url);
  await page.waitForSelector('.area-preco');

  const precoUnidade = await page.evaluate(() => {
    return {
      preco: document.querySelector('.area-preco').textContent,
      unidade: document.querySelector('.area-preco').textContent
    }
  })
  console.log(precoUnidade);

  await browser.close();
})();