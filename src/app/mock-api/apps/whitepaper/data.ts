/* eslint-disable */
export const categories = [
    {
        id: 'abstract-cat',
        title: 'Abstract',
        slug: 'Abstract'
    },
    {
        id: 'blockchain-cat',
        title: 'Blockchain',
        slug: 'Blockchain'
    },
    {
        id: 'cloud-computing-cat',
        title: 'Cloud computing',
        slug: 'cloud-computing'
    },
    {
        id: 'references',
        title: 'References',
        slug: 'references'
    },

];
export const contents = [
    {
        id: 'abstract',
        title: 'Abstract',
        slug: 'Abstract',
        description: 'Brief description of senior blockchain',
        category: 'Abstract',
        duration: 30,
        totalSteps: 5,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 0,
            completed: 0
        }
    },
    {
        id: 'blockchain1',
        title: 'Blockchain: a distributed ledger',
        slug: 'What is the blockchain?',
        description: 'What is the blockchain?',
        category: 'Blockchain',
        duration: 30,
        totalSteps: 5,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 1,
            completed: 0
        }
    }
    ,
    {
        id: 'blockchain2',
        title: 'Blockchain: a distributed ledger',
        slug: 'blockchain',
        description: 'Bitcoin, blockchain 2.0 and the growth of distributed ledger technology',
        category: 'Blockchain',
        duration: 30,
        totalSteps: 5,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 2,
            completed: 0
        }
    }
    ,
    {
        id: 'cloudcomputing',
        title: 'Cloud computing',
        slug: 'cloud-computing',
        description: 'What is cloud computing?',
        category: 'references',
        duration: 30,
        totalSteps: 5,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 3,
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
        totalSteps: 5,
        updatedAt: 'March 1, 2022',
        featured: true,
        progress: {
            currentStep: 4,
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
export const Blockchain1Content = `
<p class="indent-4">
A blockchain or distributed ledger is new way of storing and transferring information. Centralised databases have been employed for many years by financial corporations and other organisations to store customer details and record transactions of one kind or another. These are carefully-guarded and closed systems in which only privileged operators are allowed to make entries. When a customer transfers money from one bank account to another, they make a request to the bank to do so on their behalf rather than engaging directly with the database that holds information about balances. Centralisation is inherent in the paradigm.
</p>

<p class="indent-4">
This carries certain implications. A centralised system is one that by definition has a point of failure. It is also one that implies a power differential because the privileged operators have the prerogative to intervene - for example, by unilaterally reversing a transaction or imposing new charges.
</p>

<p class="indent-4">
The blockchain offers a radically different approach. The Bitcoin protocol <a href="/#/whitepaper/references">[1]</a>, launched in 2009, established for the first time the viability of transferring value on a peer-to-peer basis over the internet, without the need for a trusted intermediary. Satoshi Nakamoto, the pseudonymous creator of Bitcoin, solved the ‘double spend’ problem: the issue that digital information can easily be copied, and therefore a centralised authority was previously required to reflect where funds were located.
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

`;
export const Blockchain2Content = `
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
    <footer>
       <a href="#">Read More</a>
    </footer>
</blockquote>

<p class="indent-4">
The rise of Bitcoin and similar protocols was accompanied by a rapid re-evaluation by governments, regulators and the financial services industry of the existing paradigms. Due to Bitcoin’s position outside of the control of state and financial authorities and its potential for misuse as a tool of fraud, money laundering and other illegal activity, as well as other concerns such as its volatility and the unregulated nature of the exchanges on which it traded, the first reactions tended to be scepticism and concern. However, an increasing number of actors have also recognised the potential of blockchain technology and the broad range of use cases to which the distributed ledger lends itself.
</p>

<p class="indent-4">
A noticeable shift has occurred towards the end of 2015 and in 2016, with a series of national governments and major banks now actively undertaking research into distributed ledger technology (DLT) as a means of creating more effective money and delivering more efficient public services - not least the UK government<a href="/#/whitepaper/references">[2]</a>, China, South Korea, Goldman Sachs and UBS, amongst others. Around $1 billion was invested in Bitcoin-related companies in 2015 alone.<a href="/#/whitepaper/references">[3]</a>
</p>

<p class="indent-4">
The benefits of blockchain technology for companies and organisations of all sizes and types are becoming ever clearer. However, until now there have been few options for those who wish to deploy or use blockchain technology. They either have to invest the time and funds to create and maintain their own protocol from scratch, or use an existing open platform (such as Bitcoin itself), with all the limitations and problems that entails.
</p>
`;
export const CloudComputingContent = `
<p class="indent-4">
The benefits of blockchain technology for companies and organisations of all sizes and types are becoming ever clearer. However, until now there have been few options for those who wish to deploy or use blockchain technology. They either have to invest the time and funds to create and maintain their own protocol from scratch, or use an existing open platform (such as Bitcoin itself), with all the limitations and problems that entails.
</p>
`;
export const ReferencesContent = `
<ul>
    <li>[1] <a href="https://bitcoin.org/bitcoin.pdf" target="_blank">https://bitcoin.org/bitcoin.pdf</a></li>
    <li>[2] <a href="https://www.gov.uk/government/news/distributed-ledger-technology-beyond-block-chain" target="_blank">https://www.gov.uk/government/news/distributed-ledger-technology-beyond-block-chain</a></li>
    <li>[3] <a href="http://money.cnn.com/2015/11/02/technology/bitcoin-1-billion-invested" target="_blank">http://money.cnn.com/2015/11/02/technology/bitcoin-1-billion-invested</a></li>
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
        subtitle: 'What is the blockchain?',
        content: `<h2 class="text-2xl sm:text-3xl">What is the blockchain?</h1> ${Blockchain1Content}`
    },
    {
        order: 2,
        title: 'Blockchain',
        subtitle: 'Bitcoin, blockchain 2.0 and the growth of distributed ledger technology',
        content: `<h2 class="text-2xl sm:text-3xl">Bitcoin, blockchain 2.0 and the growth of distributed ledger technology</h1> ${Blockchain2Content}`
    },
    {
        order: 3,
        title: 'Cloud Computing',
        subtitle: 'What is cloud Computing?',
        content: `<h2 class="text-2xl sm:text-3xl">Cloud Computing</h1> ${CloudComputingContent}`
    },
    {
        order: 4,
        title: 'References',
        subtitle: 'List of references used in White Paper',
        content: `<h2 class="text-2xl sm:text-3xl">References</h1> ${ReferencesContent}`
    }
];
