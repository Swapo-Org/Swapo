from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Trade, TradeProposal
from .serializers import TradeSerializer, TradeProposalSerializer


class TradeProposalViewSet(viewsets.ModelViewSet):
    queryset = TradeProposal.objects.all().order_by("-proposal_date")
    serializer_class = TradeProposalSerializer
    # permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=['post'])
    def accept(self, request, pk=None):
        """Accept a trade proposal and create a Trade object"""
        proposal = self.get_object()
        
        # Check if proposal is already accepted or has a trade
        if proposal.status == 'accepted':
            return Response(
                {"detail": "Proposal already accepted"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Update proposal status to accepted
        proposal.status = 'accepted'
        proposal.save()
        
        # Create Trade from accepted proposal
        trade = Trade.objects.create(
            proposal=proposal,
            user1=proposal.proposer,
            user2=proposal.recipient,
            skill1=proposal.skill_offered_by_proposer,
            skill2=proposal.skill_desired_by_proposer,
            terms_agreed=proposal.message or "Trade agreement",
            status='active'
        )
        
        return Response({
            "detail": "Proposal accepted and trade created",
            "proposal": TradeProposalSerializer(proposal).data,
            "trade": TradeSerializer(trade).data
        }, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'])
    def reject(self, request, pk=None):
        """Reject a trade proposal"""
        proposal = self.get_object()
        
        # Check if proposal is already rejected
        if proposal.status == 'rejected':
            return Response(
                {"detail": "Proposal already rejected"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Update proposal status to rejected
        proposal.status = 'rejected'
        proposal.save()
        
        return Response({
            "detail": "Proposal rejected",
            "proposal": TradeProposalSerializer(proposal).data
        }, status=status.HTTP_200_OK)


class TradeViewSet(viewsets.ModelViewSet):
    queryset = Trade.objects.all().order_by("-start_date")
    serializer_class = TradeSerializer
    # permission_classes = [permissions.IsAuthenticated]
