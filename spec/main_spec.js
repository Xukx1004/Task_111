const main = require('../src/main.js');
const beersongs = require('../src/beersong');
describe('beer',function(){
    
    it('输出啤酒歌',function(){
        let n = 100;
        let result = beer(n);
        let expected = beersongs().trim();
        expect(result).toEqual(expected);
    });
});

