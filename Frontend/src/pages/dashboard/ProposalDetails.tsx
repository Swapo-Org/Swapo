import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '@/utils/axiosInstance';

type Proposal = {
  proposal_id: number;
  message: string;
  proposal_date: string;
  status: string;
  last_status_update: string;
  listing: number;
  proposer: number;
  recipient: number;
  skill_offered_by_proposer: number;
  skill_desired_by_proposer: number;
};

export default function ProposalDetails() {
  const { proposalId } = useParams();
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/trades/proposals/${proposalId}/`)
      .then((res) => {
        console.log('proposal', res.data);
        setProposal(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [proposalId]);

  if (loading)
    return (
      <p className="p-5 text-center text-gray-500 dark:text-gray-300">
        Loading...
      </p>
    );

  if (!proposal)
    return (
      <p className="p-5 text-center text-gray-500 dark:text-gray-300">
        Proposal not found.
      </p>
    );

  return (
    <div className="mx-auto mb-12 max-w-xl p-5">
      <h1 className="mb-5 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
        Proposal Details
      </h1>

      <div className="rounded-xl bg-white p-5 shadow-md dark:bg-gray-800">
        {/* ONE REUSABLE ROW */}
        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Proposal ID
          </span>
          <span className="font-bold text-gray-900 dark:text-gray-100">
            #{proposal.proposal_id}
          </span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Status
          </span>
          <span
            className={`font-bold ${
              proposal.status === 'pending'
                ? 'text-yellow-700'
                : proposal.status === 'accepted'
                  ? 'text-green-700'
                  : 'text-red-700'
            }`}
          >
            {proposal.status}
          </span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Message
          </span>
          <span className="max-w-[55%] text-right text-gray-800 dark:text-gray-200">
            {proposal.message || '—'}
          </span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Listing
          </span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {proposal.listing}
          </span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Proposer
          </span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {proposal.proposer}
          </span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Recipient
          </span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {proposal.recipient}
          </span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Skill Offered
          </span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {proposal.skill_offered_by_proposer}
          </span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Skill Desired
          </span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {proposal.skill_desired_by_proposer}
          </span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3 dark:border-gray-700">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Proposal Date
          </span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {new Date(proposal.proposal_date).toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between py-3">
          <span className="font-semibold text-gray-600 dark:text-gray-300">
            Last Updated
          </span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {new Date(proposal.last_status_update).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
