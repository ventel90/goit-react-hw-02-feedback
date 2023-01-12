import styled from '@emotion/styled';

export const Votes = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 300px;
    gap: 10px;
`;

export const VotesItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const VoteName = styled.span`
    text-align: left;
    font-size: 24px;
    color: var(--secondary);
`;
