// Write your tests here!
const subsitution = require("../src/substitution")
const expect = require("chai").expect;

describe("subsitution()", () => {

	const alpha = "xoyqmcgrukswaflnthdjpzibev";
    
	it("should encode correctly", () => {
		expect(subsitution("thinkful", alpha)).to.equal("jrufscpw");
	});

	it("should decode correctly", () => {
		expect(subsitution("jrufscpw", alpha, false)).to.equal("thinkful");
	});
	
	it("should maintain spaces throughout", () => {
		expect(subsitution("you are an excellent spy", alpha)).to
			.equal("elp xhm xf mbymwwmfj dne");
	});

	it("should ignore capital letters", () => {
		expect(subsitution("ThInKfUl", alpha)).to.equal("jrufscpw");
	});

	it("should be able to use symbols within the alphabet", () => {
		expect(subsitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to
			.equal("y&ii$r&");
	});

	it("should return false if alphabet does not have 26 characters", () => {
		expect(subsitution("thinkful", "short")).to.equal(false);
	});

	it("should return false if alphabet contains non-unique characters", () => {
		expect(subsitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to
			.equal(false);
	});
});