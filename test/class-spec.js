const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // expect.fail("replace with your code");
      let newWord = new Word();
      expect(newWord.word).to.equal(undefined);
    });

    it('should set the "word" property when a new word is created', function () {
      // expect.fail("replace with your code");
      let newWord = new Word('John');
      expect(newWord.word).to.equal('John');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      // expect.fail("replace with your code");
      let word = new Word('bingo');
      expect(word.removeVowels()).to.equal('bng');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      // expect.fail("replace with your code");
      let word = new Word('pragma');
      expect(word.removeConsonants()).to.equal('aa');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      // expect.fail("replace with your code");
      let word = new Word('hey');
      expect(word.pigLatin()).to.equal('eyhay');

      word = new Word('heyhy');
      expect(word.pigLatin()).to.equal('eyhyhay');

      word = new Word('alphabet');
      expect(word.pigLatin()).to.equal('alphabetyay');
    });
  });
});
