import { Injectable, Inject } from '@angular/core';
import { Contract, ContractInterface, Signer } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class Web3ContractService extends Contract {
  constructor(
    @Inject(String) address: string,
    @Inject(String) abi: ContractInterface,
    signer: Signer
  ) {
    super(address, abi, signer);
  }
}
