/* eslint-disable */
export const categories = [
    {
        id: 'abstract-cat',
        title: 'Abstract',
        slug: 'abstract'
    },
    {
        id: 'blockchain-cat',
        title: 'Blockchain',
        slug: 'blockchain'
    },
    {
        id: 'cloud-computing-cat',
        title: 'Cloud computing',
        slug: 'cloudcomputing'
    },
    {
        id: 'seniorblockchain-cat',
        title: 'Senior Blockchain',
        slug: 'seniorblockchain'
    },
    {
        id: 'blockcore-cat',
        title: 'Blockcore',
        slug: 'blockcore'
    },

    {
        id: 'references-cat',
        title: 'References',
        slug: 'references'
    },

];
export const contents = [
    {
        id: 'abstract',
        title: 'Abstract',
        slug: 'abstract',
        description: 'Brief description of senior blockchain',
        category: 'abstract',
        duration: 30,
        totalSteps: 6,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },
    {
        id: 'blockchain',
        title: 'Blockchain',
        slug: 'blockchain',
        description: 'a distributed ledger',
        category: 'blockchain',
        duration: 30,
        totalSteps: 6,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 1,
            completed: 0
        }
    }
    ,
    {
        id: 'cloudcomputing',
        title: 'Cloud computing',
        slug: 'cloud-computing',
        description: 'What is cloud computing?',
        category: 'cloudcomputing',
        duration: 30,
        totalSteps: 6,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 2,
            completed: 0
        }
    }
    ,
    {
        id: 'seniorblockchain',
        title: 'What is the Senior Blockchain?',
        slug: 'seniorblockchain',
        description: 'What is the Senior Blockchain?',
        category: 'seniorblockchain',
        duration: 30,
        totalSteps: 6,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 3,
            completed: 0
        }
    }
    ,
    {
        id: 'blockcore',
        title: 'What is the Blockcore?',
        slug: 'blockcore',
        description: 'What is the Blockcore?',
        category: 'blockcore',
        duration: 30,
        totalSteps: 6,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 4,
            completed: 0
        }
    }
    ,
    {
        id: 'references',
        title: 'References',
        slug: 'references',
        description: 'List of references used in White Paper',
        category: 'references',
        duration: 30,
        totalSteps: 6,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 5,
            completed: 0
        }
    }

];


export const AbstractContent = `
<p class="indent-4">
Blockchain or Distributed Ledger Technology (DLT) offers a radically different paradigm of storing and managing information online. Decentralised ledgers lack the points of failure and associated security issues of traditional databases and top-down protocols, whilst at the same time posing their own unique challenges for effective deployment and maintenance.
</p>
<p class="indent-4">
The advantages in terms of costs, transparency, immutability, security and confidence that are characteristic of blockchain solutions mean that financial businesses, government departments and other organisations are exploring applications of all kinds with a view to delivering services more profitably and efficiently. However, reliable deployment of a new blockchain fit for purpose entails extensive overheads in terms of network infrastructure, development, security and ongoing maintenance. Moreover, use of an existing blockchain (such as Bitcoin) comes with numerous problems for a mainstream business, not least because users have no control over blockchain features or future development.
</p>
<p class="indent-4">
An attractive model for blockchain service provision exists in cloud computing. Cloud services may be tailored according to the needs of the organisation and infrastructure, platforms and software provided as services via web interfaces - without businesses having to take on the maintenance of these themselves.
</p>
<p class="indent-4">
Senior Blockchain will take a similar approach to blockchain deployment, enabling organisations to provision their own private blockchains, senior blockchain is responsible for its protection and management, and if possible, the blockchain project will create them virtually in the world of Metaverse. This approach means there are few unnecessary overheads whilst allowing businesses to secure the benefits of a blockchain-based solution, developing services via powerful APIs and lite web-based clients.
</p>
`;
export const BlockchainContent = `
<h3>What is the blockchain?</h3>
<p class="indent-4">
A blockchain or distributed ledger is new way of storing and transferring information. Centralised databases have been employed for many years by financial corporations and other organisations to store customer details and record transactions of one kind or another. These are carefully-guarded and closed systems in which only privileged operators are allowed to make entries. When a customer transfers money from one bank account to another, they make a request to the bank to do so on their behalf rather than engaging directly with the database that holds information about balances. Centralisation is inherent in the paradigm.
</p>

<p class="indent-4">
This carries certain implications. A centralised system is one that by definition has a point of failure. It is also one that implies a power differential because the privileged operators have the prerogative to intervene - for example, by unilaterally reversing a transaction or imposing new charges.
</p>

<p class="indent-4">
The blockchain offers a radically different approach. The Bitcoin protocol, launched in 2009, established for the first time the viability of transferring value on a peer-to-peer basis over the internet, without the need for a trusted intermediary. Satoshi Nakamoto, the pseudonymous creator of Bitcoin, solved the ‘double spend’ problem: the issue that digital information can easily be copied, and therefore a centralised authority was previously required to reflect where funds were located.
</p>

<p>
At its simplest, the blockchain is a digital record stored on a network of computers around the world. Instead of securing information by restricting access, the blockchain shares information amongst all users. Ownership of funds (for example) is cryptographically verified, and the full transparency and mutual ownership of the system means that a bad actor is immediately recognisable as such and any transactions submitted by such a node are ignored.
</p>

<p>
The decentralised structure of the blockchain brings several key features in contrast to traditional centralised approaches:
<ul>
    <li>
    <b>Transparency: </b>it is possible for anyone to track the movement of funds from one account to another.
    </li>

    <li>
    <b>Immutability: </b>once confirmed, a transaction cannot be reversed. No one can interfere with a completed transfer.
    </li>

    <li>
    <b>Low cost: </b>transaction fees are minimal.
    </li>

    <li>
    <b>Cross-border: </b>funds can be sent as easily to someone on the other side of the world as they can to someone in the next room.
    </li>

    <li>
    <b>Speed: </b>due to the flat and transparent nature of the blockchain, transfers show up almost instantly and are typically confirmed in minutes, rather than hours or days.
    </li>
</ul>
</p>

<h3>Bitcoin, blockchain 2.0 and the growth of distributed ledger technology</h3>
<p class="indent-4">
Although Bitcoin is very successful at transferring value and is an effective form of decentralised money, from the outset it was recognised that the same approach could be used to record information of almost any kind on the same shared basis. As well as cash, strings of characters on the blockchain could represent simple messages, ownership of physical or digital assets or securities, voting decisions, and so on.
</p>

<p class="indent-4">
This broader application was developed by a number of ‘2.0’ platforms including Nxt and BitShares, amongst others. To date, however, all of these have been relatively limited in one way or another, and lack suitability in their current forms for adoption by real-world financial businesses.
</p>

<blockquote>
    <h3>Case study: Proof of Existence</h3>
    <p>
       The immutable and transparent nature of the blockchain lends itself to applications in which the existence of a file or document must be proved for a particular point in time. Blockchain solutions are already informally used as a kind of digital copyright. Users take a ‘hash’ – a cryptographic digest of a file that serves as a unique fingerprint – and upload it to the blockchain….
    </p>
</blockquote>

<p class="indent-4">
The rise of Bitcoin and similar protocols was accompanied by a rapid re-evaluation by governments, regulators and the financial services industry of the existing paradigms. Due to Bitcoin’s position outside of the control of state and financial authorities and its potential for misuse as a tool of fraud, money laundering and other illegal activity, as well as other concerns such as its volatility and the unregulated nature of the exchanges on which it traded, the first reactions tended to be scepticism and concern. However, an increasing number of actors have also recognised the potential of blockchain technology and the broad range of use cases to which the distributed ledger lends itself.
</p>

<p class="indent-4">
A noticeable shift has occurred towards the end of 2015 and in 2016, with a series of national governments and major banks now actively undertaking research into distributed ledger technology (DLT) as a means of creating more effective money and delivering more efficient public services - not least the UK government, China, South Korea, Goldman Sachs and UBS, amongst others. Around $1 billion was invested in Bitcoin-related companies in 2015 alone.
</p>

<p class="indent-4">
The benefits of blockchain technology for companies and organisations of all sizes and types are becoming ever clearer. However, until now there have been few options for those who wish to deploy or use blockchain technology. They either have to invest the time and funds to create and maintain their own protocol from scratch, or use an existing open platform (such as Bitcoin itself), with all the limitations and problems that entails.
</p>


`;

export const CloudComputingContent = `
<h3>What is cloud computing?</h3>
<p class="indent-4">
Cloud computing refers to the practice of accessing data and IT resources via a remote provider, rather than relying solely on in-house hardware and software.
</p>
<p class="indent-4">
In the internet era, businesses and individuals no longer need to purchase and maintain their own hardware, or even run their own software platforms. Instead, these can be housed by third parties in dedicated data centres and accessed as and when required.
</p>

<p class="indent-4">
The benefits of such an approach are extensive. It means that resources can be allocated and paid for according to need, rather than purchased inefficiently and in advance; economies of scale are inherent in cloud provision. This allows for far greater flexibility and control over budgets, as well as enabling companies to scale rapidly when required. Consequently, almost all of us now use cloud computing in some form, particularly for email (including popular webmail platforms like Gmail and Yahoo) and storage (cloud drives such as AWS, OpenDrive, iCloud, Dropbox and so on).
</p>

<p class="indent-4">
Although storage is one of the most popular applications of cloud computing, almost any IT resource an organisation needs can be provided in this way. Over and above Infrastructure-as-a-Service (IaaS), which includes servers, storage and network provision, there is a growing move to meet all computing needs via the cloud. Platformas-a-Service (PaaS) comprises the delivery of development tools and frameworks, databases and execution environments, whilst Software-as-a-Service (SaaS) allows applications to be run from the cloud.
</p>
`;
export const ReferencesContent = `
<ul>
    <li><a href="https://bitcoin.org/bitcoin.pdf" target="_blank">https://bitcoin.org/bitcoin.pdf</a></li>
    <li><a href="https://www.gov.uk/government/news/distributed-ledger-technology-beyond-block-chain" target="_blank">https://www.gov.uk/government/news/distributed-ledger-technology-beyond-block-chain</a></li>
    <li><a href="http://money.cnn.com/2015/11/02/technology/bitcoin-1-billion-invested" target="_blank">http://money.cnn.com/2015/11/02/technology/bitcoin-1-billion-invested</a></li>
    <li><a href="https://en.bitcoin.it/wiki/Proof_of_Stake" target="_blank">https://en.bitcoin.it/wiki/Proof_of_Stake</a></li>
    <li>Bitcointalk discussion on the issues of POS <a href="https://bitcointalk.org/index.php?topic=1382241.0" target="_blank">https://bitcointalk.org/index.php?topic=1382241.0</a></li>
    <li><a href="https://github.com/libbitcoin/libbitcoin-system/wiki/Proof-of-Stake-Fallacy" target="_blank">https://github.com/libbitcoin/libbitcoin-system/wiki/Proof-of-Stake-Fallacy</a></li>
    <li><a href="http://earlz.net/view/2017/07/27/1904/the-missing-explanation-of-proof-of-stake-version" target="_blank">http://earlz.net/view/2017/07/27/1904/the-missing-explanation-of-proof-of-stake-version</a></li>
    <li><a href="https://www.reddit.com/r/Bitcoin/comments/1oi7su/criticisms_of_proofofstake/" target="_blank">https://www.reddit.com/r/Bitcoin/comments/1oi7su/criticisms_of_proofofstake/</a></li>
    <li><a href="https://blog.ethereum.org/2014/07/05/stake/" target="_blank">https://blog.ethereum.org/2014/07/05/stake/</a></li>
    <li><a href="https://eprint.iacr.org/2018/248.pdf" target="_blank">https://eprint.iacr.org/2018/248.pdf</a></li>
    <li><a href="http://tselab.stanford.edu/downloads/PoS_LC_SBC2020.pdf" target="_blank">http://tselab.stanford.edu/downloads/PoS_LC_SBC2020.pdf</a></li>

    </ul>

`;
export const SeniorBlockchainContent = `
<h3>Overview</h3>
<p class="indent-4">
Senior Blockchain is a powerful and flexible blockchain Development Platform designed for the needs of real-world financial services businesses and other organisations that want to develop, test and deploy applications on the blockchain And raise capital for their projects or build their projects in metaverse. Senior Blockchain significantly simplifies the development process for creating Blockchain applications and accelerates the development lifecycle for blockchain development projects. Senior Blockchain private chains allow businesses to deploy their own customised blockchains without the overheads inherent in running their own blockchain network infrastructure. Senior Blockchain’s turnkey solution enables developers and businesses to create, test and deploy blockchain-based applications quickly and easily, all without the costs and security concerns that would otherwise arise from an in-house implementation.
</p>
<h3>What does it solve</h3>
<p class="indent-4">
There are currently technical hurdles to getting the average individual And organizations and business owners interested in the concept and usage of cryptocurrencies. Also, there is huge potential to improve the Business through the implementation of blockchain solutions. Senior Blockchain offers solutions to make it easier for people and organizations to raise capital and invest.
</p>
<ul>
   <li>
       <b>Organizations, business owners or owners of sensible ideas:</b>
       The senior blockchain examines the project or idea, and by researching and studying it and the necessary studies, builds a private blockchain related to it and prepares for the initial public offering of coins that provide the initial capital to implement the project or idea and give it to the owner. Put the blockchain. Senior Blockchain also oversees all project or idea implementation activities and protects the funds raised. If the project has the ability to become a virtual reality, senior blockchain builds it in the virtual world and executes it according to an agreement with the owner of the blockchain. This virtual world is created in Senior Blockchain's private network. Its coin is the SBC virtual world.
   </li>
   <li>
       <b>Investors or people:</b>
       Anyone anywhere in the world who wants to invest in projects that are monitored and not scams can invest by buying project coins, and when the project coins are listed in reputable exchanges, they can trade their coins. . Certainly the price of coins will be higher than the initial offering price and investors will benefit.
   </li>
</ul>
`;

export const BlockcoreContent = `
<h3>Overview</h3>
<p class="indent-4">
Senior Blockchain uses Blockcore as its core. Blockcore  is a platform to build Layer 1 consensus networks based on the Bitcoin protocol, built on the .NET Core framework and written entirely in C#. Blockcore aims to maintain an alternative C# Bitcoin implementation, based on the NBitcoin & Stratis projects.
</p>
<h3>Consensus Algorithm (PoS)</h3>

<p class="indent-4">
Blockcore utilizes Proof-of-Stake as oppose to Proof-of-Work (Bitcoin).
</p>
<h3>What is POS vs POW</h3>
<p class="indent-4">
Proof Of Stake is an alternative way to achieve consensus to Proof Of Work, the difference with POS is that block producers use ownership of coins as the right to produce blocks and participating nodes can verify such claims by validating cryptographic signatures and the chain history. A good comparison is that POW uses CPU cycles as measurement while POS uses units of coins.
</p>
<h3>Definitions and explanations:</h3>
<h4 class="text-primary">Coinbase</h4>
<p class="indent-4">
A special transaction that is produced by the miners (the producers of POW blocks) and contains information about the block.
</p>

<h4 class="text-primary">Coinstake</h4>
<p class="indent-4">
A special transaction that is produced by the stakers (the producers of POS blocks) and contains the tx input and outputs of coins used to create a block.<br>
</p>
<p class="indent-4">
A coinstake input can be split in to several outputs, this is done in order to reduce the size of a staking output.
Splitting a big output to many smaller outputs increases the chance of producing new blocks.
</p>

<h4 class="text-primary">StakeMinConfirmations</h4>
<p class="indent-4">
The minimum confirmations required for a coin to be good enough to participate in staking.
</p>
<p class="indent-4">
Must be equal or greater than MaxReorg this is to discourage attackers to stake in isolation and then force a reorg.
</p>


<h4 class="text-primary">MaxReorg</h4>
<p class="indent-4">
Long reorganization protection or the maximal length of reorganization that the node is willing to accept. The reason to prevent long reorganization is to prevent "history attack" or in other words old spent coins can't be reused to create a longer chain in isolation and cause big reorgs.
</p>
<p class="indent-4">
Honest nodes will not switch to a chain that forked earlier than MaxReorg, and because StakeMinConfirmations will not allow to reuse coins before MaxReorg then staking in isolation cannot cause long reorganisations.
</p>


<h4 class="text-primary">Coin maturity</h4>
<p class="indent-4">
The number of confirmations a newly found coinstake needs to be buried under before it can be spent. (Not to be confused with StakeMinConfirmations which is for staking)
</p>

<h4 class="text-primary">Proven Headers</h4>
<p class="indent-4">
Those are headers that contain all the information that is needed to validate a coinstake. Proven headers are used as a headers first approach where the node will first download the headers of blocks and only if the header is valid will the node fetch the entire block for full validation.
</p>
<p class="indent-4">
The full Proven Headers specification can be found here <a href="https://github.com/seniorblockchain/blockcore/blob/master/Documentation/Features/ProvenHeaders.md" target="_blank">https://github.com/seniorblockchain/blockcore/blob/master/Documentation/Features/ProvenHeaders.md</a>
</p>


<h4 class="text-primary">Target Difficulty</h4>

<p class="indent-4">
The difficulty target for the next block, or how hard will it be to find the next valid Kernel to satisfy the target difficulty.
</p>
<h4 class="text-primary">Kernel hash</h4>

<p class="indent-4">
A sha256 hash created from a number of parameters corresponding to the coinstake. A valid stake kernel hash satisfies the target difficulty.
</p>
<h4 class="text-primary">Target Spacing</h4>

<p class="indent-4">
The expected block time in seconds, or how often do we expect the network to produce a block.<br>
The target spacing should be multiples of the Mask.
</p>
<h4 class="text-primary">Future Drift</h4>

<p class="indent-4">
Future drift is maximal allowed block's timestamp difference over adjusted time. We set the future drift to be a fixed value of 15 seconds which is close to the Mask value.
</p>
<h4 class="text-primary">Mask</h4>

<p class="indent-4">
A bit mask for the coinstake header's timestamp. Used to decrease granularity of timestamp.<br>
This corresponds to the number of blocks that can be produced in a given time span.
</p>
<p class="indent-4">
For example if the bit mask is 15 (0x0000000F) then a valid coinstake's timestamp must be divisible by 16.
</p>

<h4 class="text-primary">Stake Modifiers</h4>

<p class="indent-4">
The stake modifier forms a chain of hashes made from the previous stake modifier and the kernel all the way bacl to the first POS block. It's used to introduce an additional input parameter to the Kernel calculations, in order to scramble computation to make it very difficult to precompute future proof-of-stake.
</p>

<h3>How it works on Blockcore</h3>
<h4 class="text-primary">Hashing a valid kernel</h4>
<p class="indent-4">
How is a valid coinstake found? This is the heart of the processes.
</p>

<p class="indent-4">
The processes of staking will go as following, every time the masking of the timestamp is valid the node will iterate over all its stakeable outputs (the outputs that reached maturity and are beyond MaxReorg)
</p>

<p>
Then each output will be hashed with the following parameters:
</p>
<ul>
<li>Previous StakeModifier - the stake modifier is a chain of coinstake hashes</li>
<li>Output hash - the hash of the output of the coins that are being spent to find the kernel</li>
<li>Output N - the position of the output of the coins that are being spent to find the kernel</li>
<li>New coinstake current time - (the timestamp of the new output that will be created, this must fit the MASK rule)</li>
</ul>
<p>
The output hash of the above is called the Kernel.
</p>

<p class="indent-4">
The Target: The target is the number of which a kernel hash needs to be below in order to be considered valid. In order to give a better chance to bigger outputs (a UTXO with more coins) The target is pushed up by a factor to the number of coins a UTXO has, This is called the weighted target, it means the target of the UTXO is higher the more coins it has, as a result statistically it will find a solution faster.
</p>
<p class="indent-4">
If the resulting kernel hash of the above calculations is below the weighted target it means the coinstake is valid and can be used to create a block.
</p>

<h4 class="text-primary">The importance of syncing time correctly (future drift)</h4>
<p class="indent-4">
Each node has a consensus rule of a fixed interval of 15 seconds that will enforce how far in the future it will accept blocks, blocks with a time stamp that is 15 seconds further than local nodes current datetime will be rejected.
</p>
<p class="indent-4">
But such rejected blocks will not be considered invalid, in case our local node just had the wrong time in comparison to the network, and the network accepts such a block our local node would fork away form the network consensus.
</p>
<p class="indent-4">
This means it is crucial that nodes on the network that participate in full consensus rules validation will be on the same UTC datetime. To achieve that we use the computers local current time, and double check that against all connected peers datetime (when a peer first connects it will advertise its current UTC datetime) giving the datetime samples for outbound nodes 3x more weight in the measurements (this is in order to prevent a certain attack on a node where an attacker can initiate many inbound connections and effect our local nodes avg time). If the local time and peers avg time do not match the node will print out a warning message and default to the peers time.
</p>

<h4 class="text-primary">Block Signatures (why sign a block with the private key owning the UTXO)</h4>
<p class="indent-4">
The coinstake that found a valid kernel and thus was selected to create a block is used to proof ownership of the UTXO by providing the signature that spends the outputs.
</p>
<p class="indent-4">
However such an output has no cryptographic strong link to the block itself, meaning an attacker can take the valid coinstake utxo and put it in another block which the attacker created and propagate that to the network, the attacker could then censor transactions at will.
</p>
<p class="indent-4">
By signing the block with the same key that owns the UTXO peers can validate the block was created by the owner of the coinstake. The block signature is attached at the end of the serialized block and is not part of the header hash.
</p>

<h4 class="text-primary">How is the next difficulty target calculated</h4>

<p class="indent-4">
The calculation of the next target is based on the last target value and the block time (aka spacing) (i.e. difference in time stamp of this block and its immediate predecessor). The target changes every block and it is adjusted down (i.e. towards harder to reach, or more difficult) if the time to mine last block was lower than the target block time. And it is adjusted up if it took longer than the target block time. The adjustments are done in a way the target is moving towards the target-spacing (expected block time) exponentially, so even a big change in the mining power on the network will be fixed by retargeting relatively quickly.
</p>

<h4 class="text-primary">Changes made in POSv4<h4>
<p>
Two changes were made in POSv4.
</p>
<ul>
    <li>The removal of the time stamp from the transaction serialization: this makes POS transactions serialize the same as Bitcoin transactions, the benefit of that is easier to use various blockchain tools that are made for Bitcoin. That time stamp was used in the kernel hash however the kernel hash was anyway defaulting to the header timestamp so there was no need to serialize the time stamp also in each transaction.</li>
    <li>The removal of the coinstake time from the kernel hash calculations: when checking the kernel validity a few parameters are hashed together to find a valid kernel, previously the timestamp of the utxo that is being spent was also included in that hash however it provides no additional value because the previous outpoint is used as well and that is already unique</li>
</ul>

<h4 class="text-primary">Coldstaking (multisig staking)</h4>
<p class="indent-4">
Coldstaking is a mechanism that eliminates the need to keep the coins in a hot wallet. When setting up coldstaking a user generates two wallets (two different private keys) one key can only be used for staking (creating other coinstakes) and the other key is used for spending the coins.
</p>
<p class="indent-4">
Cold staking still requires to have a fully synced node running and connected to the network.
</p>
<p class="indent-4">
The full Coldstaking specification can be found here <a href="https://github.com/seniorblockchain/blockcore/blob/master/Documentation/Features/ColdStaking.md" target="_blank">https://github.com/seniorblockchain/blockcore/blob/master/Documentation/Features/ColdStaking.md</a>
</p>

<h3>Weaknesses</h3>
<h4 class="text-primary">NAS (nothing at stake)</h4>
<p class="indent-4">
Nothing-at-stake is a theoretical security issue in proof-of-stake consensus systems in which validators have a financial incentive to mine on every fork of the blockchain that takes place, which is disruptive to consensus and potentially makes the system more vulnerable to attacks Assuming the majority of staking power (coins at stake) are honest an attacker which exercises NAS can make it very hard for honest nodes to know what is the chain with the total honest staking power (even if the attacker stakes on forks with less total stake this can confuse nodes in IBD) However this attack is not obvious to execute as an attacker would have to be economically invested in the chain in order to execute the attack and will be risking the value of their own coins.
</p>

<a href="https://golden.com/wiki/Nothing-at-stake_problem https://medium.com/coinmonks/understanding-proof-of-stake-the-nothing-at-stake-theory-1f0d71bc027" target="_blank" >https://golden.com/wiki/Nothing-at-stake_problem https://medium.com/coinmonks/understanding-proof-of-stake-the-nothing-at-stake-theory-1f0d71bc027</a>

<h4 class="text-primary">Stake Grinding</h4>

<p class="indent-4">
Stake grinding is a class of attack where a validator performs some computation or takes some other step to try to bias the randomness in their own favour.
</p>
<p class="indent-4">
In a stake grinding attack, the attacker has a small amount of stake and goes through the history of the blockchain and finds places where their stake wins a block. In order to consecutively win, they modify the next block header until some stake they own wins once again.
</p>
<a href="https://dyor-crypto.fandom.com/wiki/Grinding_Attack" target="_blank">https://dyor-crypto.fandom.com/wiki/Grinding_Attack</a>

<h4 class="text-primary">The IBD problem</h4>

<p class="indent-4">
Proof of stake networks are more vulnerable during Initial Block Download (IBD), during initial sync a local node will try to find peers to sync the consensus history, however if a fake chain is presented (a fake chain is any chain that is not the chain accepted by the majority of stakers) a local node cannot rewind away from the fake chain if it's fork is beyond the maxreorg parameter and will result in our local node being stuck on the "wrong" chain.
</p>
<p class="indent-4">
To address that the local node uses checkpoints (regularly hard coding in to the software the correct chain), and to mitigate that attack during IBD a node will only accept outgoing connections.
</p>

<h4 class="text-primary">Known issues of POS</h4>

<p>
POS is considered less decentralized than POW because:
</p>
<ul>
<li>Complexity: the POS protocol is more complex, more unknown attacks may be found</li>
<li>The IBD problem: means in some cases users needs to use some external trust in order to find the best chain.</li>
<li>In case of a 51% attack: user intervention is needed like checkpoints in order to recover.</li>
<li>IBD: the reliance on checkpoints for IBD.</li>
<li>Time sync: the requirement that a majority of nodes have the correct global time.</li>
</ul>


`;


export const ContentSteps = [
    {
        order: 0,
        title: 'Abstract',
        subtitle: 'Brief description of Senior Blockchain',
        content: `<h2 class="text-2xl sm:text-3xl">Abstract</h1> ${AbstractContent}`
    },
    {
        order: 1,
        title: 'Blockchain',
        subtitle: 'a distributed ledger',
        content: `<h2 class="text-2xl sm:text-3xl">Blockchain: a distributed ledger</h1> ${BlockchainContent}`
    },

    {
        order: 2,
        title: 'Cloud Computing',
        subtitle: 'What is cloud Computing?',
        content: `<h2 class="text-2xl sm:text-3xl">Cloud Computing</h1> ${CloudComputingContent}`
    },
      {
        order: 3,
        title: 'What is the Senior Blockchain?',
        subtitle: 'What is the Senior Blockchain?',
        content: `<h2 class="text-2xl sm:text-3xl">What is the Senior Blockchain?</h1> ${SeniorBlockchainContent}`
    },
    {
        order: 4,
        title: 'What is the Blockcore?',
        subtitle: 'What is the Blockcore?',
        content: `<h2 class="text-2xl sm:text-3xl">What is the Blockcore?</h1> ${BlockcoreContent}`
    },
    {
        order: 5,
        title: 'References',
        subtitle: 'List of references used in White Paper',
        content: `<h2 class="text-2xl sm:text-3xl">References</h1> ${ReferencesContent}`
    }
];
