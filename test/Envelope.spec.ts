import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";
import Point from "../src/Point";

describe("test Envelope", () => {

    it("test constructor with Envelope", () => {
        const envelope = new Envelope();
        expect(envelope.getXmin()).to.deep.equal(undefined);
        expect(envelope.getXmax()).to.deep.equal(undefined);
        expect(envelope.getYmin()).to.deep.equal(undefined);
        expect(envelope.getYmax()).to.deep.equal(undefined);
        expect(envelope.isEmpty()).to.be.true;
    });

     it("test with Envelope", () => {
        const envelope = new Envelope([0.0,1.0], [2.0,3.0]);
        expect(envelope.getXmin()).to.deep.equal(0.0);
        expect(envelope.getXmax()).to.deep.equal(2.0);
        expect(envelope.getYmin()).to.deep.equal(1.0);
        expect(envelope.getYmax()).to.deep.equal(3.0);
        expect(envelope.isEmpty()).to.be.false;
       
    });

});

