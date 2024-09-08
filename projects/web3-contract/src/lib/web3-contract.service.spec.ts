import { TestBed } from '@angular/core/testing';
import { Wallet } from 'ethers';

import { Web3ContractService } from './web3-contract.service';

const abi = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    inputs: [],
    name: 'getLatestPrice',
    outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
    stateMutability: 'view',
    type: 'function',
  },
];

const priceFeedConsumerAddress = `0x1C7757F1cC9C3F2a250dAB42Fb47Df35857b19d9`;
const signer = Wallet.createRandom();

describe('Web3ContractService', () => {
  let web3ContractService: Web3ContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    web3ContractService = new Web3ContractService(
      priceFeedConsumerAddress,
      abi,
      signer
    );
  });

  it('should be created', () => {
    expect(web3ContractService).toBeTruthy();
  });
});
