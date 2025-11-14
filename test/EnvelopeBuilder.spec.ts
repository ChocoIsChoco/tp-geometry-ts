import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {

    it("test constructor with EnvelopeBuilder", () => {
        const builder = new EnvelopeBuilder();
        {
            const result = builder.build();
            expect(result.toString()).to.deep.equal('Envelope[(), ()]');
        }
        {
            builder.insert([0.0,1.0]);
            const result = builder.build();
            expect(result.toString()).to.deep.equal('Envelope[(0,1), (0,1)]');
        }
        {
            builder.insert([2.0,0.0]);
            const result = builder.build();
            expect(result.toString()).to.deep.equal('Envelope[(0,0), (2,1)]');
        }
        {
            builder.insert([1.0,3.0]);
            const result = builder.build();
            expect(result.toString()).to.deep.equal('Envelope[(0,0), (2,3)]');

        }
       
    });

});

